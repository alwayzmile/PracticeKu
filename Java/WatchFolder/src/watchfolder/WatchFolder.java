package watchfolder;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.File;
import java.io.FileWriter;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class WatchFolder {
    static WatchService watcher;
    
    public static void main(String[] args) throws IOException, InterruptedException {
        String rootDir = "G:/Live Love Life/";  // the root directory I want to watch
        
        watcher = FileSystems.getDefault().newWatchService();
        registerFolderTree(rootDir);            // recursively register all subfolders in rootDir

        boolean valid = true;
        do {
            WatchKey watchKey = watcher.take();
            int i = 0; // if event.count > 1, then it is repeated event
            
            for (WatchEvent event : watchKey.pollEvents()) {
                // ignore change made in folder Log which contains log files for watched changes
                if (i == 0 && event.count() > 0 && !event.context().toString().equals("Log")) {
                    WatchEvent.Kind change = event.kind();
                    
                    // directory where the change happens
                    Path dir = (Path)watchKey.watchable();
                    
                    // full path of file changed
                    Path fullPath = dir.resolve(event.context().toString());
                    
                    // use current date for log file names
                    DateFormat dateForm = new SimpleDateFormat("dd-MM-yyyy");
                    Date date = new Date();
                    File outFile = new File("G:/Live Love Life/Log/" + dateForm.format(date) + ".txt");

                    // create log file if it doesn't exist
                    if (!outFile.exists())
                        outFile.createNewFile();
                    
                    // prepare the writer. set Append to be "true"
                    FileWriter fWriter = new FileWriter(outFile.getAbsolutePath(), true);
                    BufferedWriter out = new BufferedWriter(fWriter);
                    
                    // use this date format for time info in log
                    dateForm = new SimpleDateFormat("HH:mm:ss");
                    
                    if (change.equals(StandardWatchEventKinds.ENTRY_CREATE)) {
                        out.write(dateForm.format(date) + " CREATE " + fullPath.toString());
                        out.newLine();
                    } else if (change.equals(StandardWatchEventKinds.ENTRY_MODIFY)) {
                        out.write(dateForm.format(date) + " MODIFY " + fullPath.toString());
                        out.newLine();
                    } else if (change.equals(StandardWatchEventKinds.ENTRY_DELETE)) {
                        out.write(dateForm.format(date) + " DELETE " + fullPath.toString());
                        out.newLine();
                    }
                    
                    out.flush();
                }
                
                i++;
            }
            
            valid = watchKey.reset();
        } while (valid);
    }
    
    // recursively register all folders inside root
    public static void registerFolderTree(String root) throws IOException {
        File name = new File(root);
        //System.out.println(root);
        
        // don't do it for hidden files
        if (name.isDirectory() && !name.isHidden()) {
            File sub;
            
            // register the "root" directory to WatchService watcher
            Path toWatch = Paths.get(root);
            toWatch.register(watcher, StandardWatchEventKinds.ENTRY_CREATE,
                                      StandardWatchEventKinds.ENTRY_MODIFY,
                                      StandardWatchEventKinds.ENTRY_DELETE);
            
            for (String item : name.list()) {
                // add "/" at the end as convention
                sub = new File(root + item + "/");
                
                if (sub.isDirectory() && !sub.isHidden()) {
                    // do it recursively
                    registerFolderTree(root + item + "/");
                }
            }
        }
    }
}
