jQuery.fn.exists = function() { return this.length > 0; };
if (typeof(yx_product) == 'undefined')
  yx_product = 0;
var yx_n_people = Array();
var yx_is_price_in_calendar_exist = (typeof(yx_product) !== 'undefined' && yx_product == 0) ? false : true;
var yx_display_loading = true;
var yx_languages = Array(
  Array('aa', 'Afar'),
  Array('ab', 'Abkhazian'),
  Array('af', 'Afrikaans'),
  Array('ak', 'Akan'),
  Array('sq', 'Albanian'),
  Array('am', 'Amharic'),
  Array('ar', 'Arabic'),
  Array('an', 'Aragonese'),
  Array('hy', 'Armenian'),
  Array('as', 'Assamese'),
  Array('av', 'Avaric'),
  Array('ae', 'Avestan'),
  Array('ay', 'Aymara'),
  Array('az', 'Azerbaijani'),
  Array('ba', 'Bashkir'),
  Array('bm', 'Bambara'),
  Array('eu', 'Basque'),
  Array('be', 'Belarusian'),
  Array('bn', 'Bengali'),
  Array('bh', 'Bihari'),
  Array('bi', 'Bislama'),
  Array('bs', 'Bosnian'),
  Array('br', 'Breton'),
  Array('bg', 'Bulgarian'),
  Array('my', 'Burmese'),
  Array('ca', 'Catalan; Valencian'),
  Array('ch', 'Chamorro'),
  Array('ce', 'Chechen'),
  Array('zh', 'Chinese'),
  Array('cu', 'Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic'),
  Array('cv', 'Chuvash'),
  Array('kw', 'Cornish'),
  Array('co', 'Corsican'),
  Array('cr', 'Cree'),
  Array('cs', 'Czech'),
  Array('da', 'Danish'),
  Array('dv', 'Divehi; Dhivehi; Maldivian'),
  Array('nl', 'Dutch; Flemish'),
  Array('dz', 'Dzongkha'),
  Array('en', 'English'),
  Array('eo', 'Esperanto'),
  Array('et', 'Estonian'),
  Array('ee', 'Ewe'),
  Array('fo', 'Faroese'),
  Array('fj', 'Fijjian'),
  Array('fi', 'Finnish'),
  Array('fr', 'French'),
  Array('fy', 'Western Frisian'),
  Array('ff', 'Fulah'),
  Array('ka', 'Georgian'),
  Array('de', 'German'),
  Array('gd', 'Gaelic; Scottish Gaelic'),
  Array('ga', 'Irish'),
  Array('gl', 'Galician'),
  Array('gv', 'Manx'),
  Array('el', 'Greek, Modern'),
  Array('gn', 'Guarani'),
  Array('gu', 'Gujarati'),
  Array('ht', 'Haitian; Haitian Creole'),
  Array('ha', 'Hausa'),
  Array('he', 'Hebrew'),
  Array('hz', 'Herero'),
  Array('hi', 'Hindi'),
  Array('ho', 'Hiri Motu'),
  Array('hu', 'Hungarian'),
  Array('ig', 'Igbo'),
  Array('is', 'Icelandic'),
  Array('io', 'Ido'),
  Array('ii', 'Sichuan Yi'),
  Array('iu', 'Inuktitut'),
  Array('ie', 'Interlingue'),
  Array('ia', 'Interlingua (International Auxiliary Language Association)'),
  Array('id', 'Indonesian'),
  Array('ik', 'Inupiaq'),
  Array('it', 'Italian'),
  Array('jv', 'Javanese'),
  Array('ja', 'Japanese'),
  Array('kl', 'Kalaallisut; Greenlandic'),
  Array('kn', 'Kannada'),
  Array('ks', 'Kashmiri'),
  Array('kr', 'Kanuri'),
  Array('kk', 'Kazakh'),
  Array('km', 'Central Khmer'),
  Array('ki', 'Kikuyu; Gikuyu'),
  Array('rw', 'Kinyarwanda'),
  Array('ky', 'Kirghiz; Kyrgyz'),
  Array('kv', 'Komi'),
  Array('kg', 'Kongo'),
  Array('ko', 'Korean'),
  Array('kj', 'Kuanyama; Kwanyama'),
  Array('ku', 'Kurdish'),
  Array('lo', 'Lao'),
  Array('la', 'Latin'),
  Array('lv', 'Latvian'),
  Array('li', 'Limburgan; Limburger; Limburgish'),
  Array('ln', 'Lingala'),
  Array('lt', 'Lithuanian'),
  Array('lb', 'Luxembourgish; Letzeburgesch'),
  Array('lu', 'Luba-Katanga'),
  Array('lg', 'Ganda'),
  Array('mk', 'Macedonian'),
  Array('mh', 'Marshallese'),
  Array('ml', 'Malayalam'),
  Array('mi', 'Maori'),
  Array('mr', 'Marathi'),
  Array('ms', 'Malay'),
  Array('mg', 'Malagasy'),
  Array('mt', 'Maltese'),
  Array('mo', 'Moldavian'),
  Array('mn', 'Mongolian'),
  Array('na', 'Nauru'),
  Array('nv', 'Navajo; Navaho'),
  Array('nr', 'Ndebele, South; South Ndebele'),
  Array('nd', 'Ndebele, North; North Ndebele'),
  Array('ng', 'Ndonga'),
  Array('ne', 'Nepali'),
  Array('nn', 'Norwegian Nynorsk; Nynorsk, Norwegian'),
  Array('nb', 'Bokmål, Norwegian, Norwegian Bokmål'),
  Array('no', 'Norwegian'),
  Array('ny', 'Chichewa; Chewa; Nyanja'),
  Array('oc', 'Occitan, Provençal'),
  Array('oj', 'Ojibwa'),
  Array('or', 'Oriya'),
  Array('om', 'Oromo'),
  Array('os', 'Ossetian; Ossetic'),
  Array('pa', 'Panjabi; Punjabi'),
  Array('fa', 'Persian'),
  Array('pi', 'Pali'),
  Array('pl', 'Polish'),
  Array('pt', 'Portuguese'),
  Array('ps', 'Pushto'),
  Array('qu', 'Quechua'),
  Array('rm', 'Romansh'),
  Array('ro', 'Romanian'),
  Array('rn', 'Rundi'),
  Array('ru', 'Russian'),
  Array('sg', 'Sango'),
  Array('sa', 'Sanskrit'),
  Array('sr', 'Serbian'),
  Array('hr', 'Croatian'),
  Array('si', 'Sinhala; Sinhalese'),
  Array('sk', 'Slovak'),
  Array('sl', 'Slovenian'),
  Array('se', 'Northern Sami'),
  Array('sm', 'Samoan'),
  Array('sn', 'Shona'),
  Array('sd', 'Sindhi'),
  Array('so', 'Somali'),
  Array('st', 'Sotho, Southern'),
  Array('es', 'Spanish; Castilian'),
  Array('sc', 'Sardinian'),
  Array('ss', 'Swati'),
  Array('su', 'Sundanese'),
  Array('sw', 'Swahili'),
  Array('sv', 'Swedish'),
  Array('ty', 'Tahitian'),
  Array('ta', 'Tamil'),
  Array('tt', 'Tatar'),
  Array('te', 'Telugu'),
  Array('tg', 'Tajik'),
  Array('tl', 'Tagalog'),
  Array('th', 'Thai'),
  Array('bo', 'Tibetan'),
  Array('ti', 'Tigrinya'),
  Array('to', 'Tonga (Tonga Islands)'),
  Array('tn', 'Tswana'),
  Array('ts', 'Tsonga'),
  Array('tk', 'Turkmen'),
  Array('tr', 'Turkish'),
  Array('tw', 'Twi'),
  Array('ug', 'Uighur; Uyghur'),
  Array('uk', 'Ukrainian'),
  Array('ur', 'Urdu'),
  Array('uz', 'Uzbek'),
  Array('ve', 'Venda'),
  Array('vi', 'Vietnamese'),
  Array('vo', 'Volapük'),
  Array('cy', 'Welsh','wa', 'Walloon','wo', 'Wolof'),
  Array('xh', 'Xhosa'),
  Array('yi', 'Yiddish'),
  Array('yo', 'Yoruba'),
  Array('za', 'Zhuang; Chuang'),
  Array('zu', 'Zulu')
);

function yxIsGroupPricing() {
  return jQuery('#group-pricing').prop('checked');
}

// dateInput is a string with dateformat YYYY-MM-DD
function yxDate_MonthName_Year(dateInput) {
  dateInput = new Date(dateInput);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return dateInput.getDate() + ' ' + months[dateInput.getMonth() - 1] + ' ' + dateInput.getFullYear();
}

function yxSetNPeopleArray() {
  var min_child = jQuery('#min_n_child');
  var max_child = jQuery('#max_n_child');

  var min_adult = jQuery('#min_n_adult');
  var max_adult = jQuery('#max_n_adult');

  var max_unit_type = jQuery('#max_unit_type_per_booking');

  if ((!yxIsGroupPricing()
   && min_child.val().trim() != ''
   && max_child.val().trim() != ''
   && min_adult.val().trim() != ''
   && max_adult.val().trim() != ''
   && jQuery('#DOPBSP-price').exists()
   && jQuery('#DOPBSP-price').val().trim() != '')
   ||
   (yxIsGroupPricing() && max_unit_type.val().trim() != '')) {
    var options = '';
    var min = (yxIsGroupPricing()) ? 1 : parseInt(min_child.val().trim()) + parseInt(min_adult.val().trim());
    var max = (yxIsGroupPricing()) ? parseInt(max_unit_type.val()) : parseInt(max_child.val().trim()) + parseInt(max_adult.val().trim());

    var unit = 'people';
    if (yxIsGroupPricing()) {
      if (jQuery('#opt_product_unit_type_from_list').prop('checked')) {
        unit = jQuery('#yx_product_unit_type option[value="' + jQuery('#yx_product_unit_type').val() + '"]').text();
        if (unit.substring(0, 4).toLowerCase() == 'per ') {
          unit = unit.substring(4);
        }
      } else {
        unit = jQuery('#yx_product_unit_type_custom').val();
        if (unit.substring(0, 4).toLowerCase() == 'per ') {
          unit = unit.substring(4);
        }
      }
    }

    if (yx_n_people.length > 0 && (yx_n_people[0] != min || yx_n_people[yx_n_people.length - 1] != max)) {
      var discounted_price = document.getElementById('yx_discount_price');
      if (discounted_price != null)
        discounted_price.innerHTML = '';

      console.log('max_n_people found deleted');
    } else {
      console.log('max_n_people found not_deleted');
    }

    yx_n_people = Array();
    for (var i = min; i <= max; i++) {
      yx_n_people.push(i);
      options += '<option value="' + i + '">' + i + ' ' + unit + '</option>';
    }
    jQuery('#yx_discount_n_people').html(options);

    jQuery('#yx_discount_n_people, #yx_button_set_price').prop('disabled', false);
  } else {
    jQuery('#yx_discount_n_people, #yx_button_set_price').prop('disabled', true);
    console.log('max_n_people not_found');
  }
}

var yx_recaptcha_signup, yx_recaptcha_lost_password;
var yx_shop_render_recaptcha = function() {
  if (jQuery('#yx_recaptcha_signup').length > 0) {
    yx_recaptcha_signup = grecaptcha.render('yx_recaptcha_signup', {
      'sitekey': '6LdZhCATAAAAAO-V5Cffo_PohOj86ccVDrBYYmml',
      'theme': 'light'
    });
  }

  if (jQuery('#yx_recaptcha_lost_password').length > 0) {
    yx_recaptcha_lost_password = grecaptcha.render('yx_recaptcha_lost_password', {
      'sitekey': '6LdZhCATAAAAAO-V5Cffo_PohOj86ccVDrBYYmml',
      'theme': 'light'
    });
  }
};

(function($) {
  /**
   * Handle specific page script execution
   */
  var yxRoute = {
    _routes : {}, // The routs will be stored here

    add : function(url, action) {
      if (typeof url === 'string') {
        this._routes[url] = action;
      } else {
        for (var i = 0; i < url.length; i++) {
          this._routes[url[i]] = action;
        }
      }
    },

    run : function(){
      jQuery.each(this._routes, function(pattern) {
        if(location.href.match(pattern)) {
          // "this" points to the function to be executed
          this();
        }
      });
    }
  };

  function getProvinceName(arr_address) {
    var province = '';
    // In google geocoder, the type of location for province is called administrative_area_level_1
    // So we search for it
    $.each(arr_address, function() {
      if ($.inArray('administrative_area_level_1', this.types) >= 0) {
        province = this.long_name;
        return false;
      }
    });

    return province;
  }

  function getProvinceCode(province) {
    switch (province) {
      case 'Aceh':                          return 'AC'; break;
      case 'Sumatera Utara':                return 'SU'; break; // Medan
      case 'Sumatera Barat':                return 'SB'; break; // Padang
      case 'Riau':                          return 'RI'; break; // Pekanbaru
      case 'Kepulauan Riau':                return 'KR'; break; // Kota Tanjungpinang
      case 'Jambi':                         return 'JA'; break; // Kota Jambi
      case 'Sumatera Selatan':              return 'SS'; break; // Palembang
      case 'Kepulauan Bangka Belitung':     return 'BB'; break; // Kota Pangkal Pinang
      case 'Bengkulu':                      return 'BE'; break; // Kota Bengkulu
      case 'Lampung':                       return 'LA'; break;
      case 'Daerah Khusus Ibukota Jakarta': return 'JK'; break;
      case 'Jawa Barat':                    return 'JB'; break;
      case 'Banten':                        return 'BT'; break;
      case 'Jawa Tengah':                   return 'JT'; break;
      case 'Jawa Timur':                    return 'JI'; break;
      case 'Daerah Istimewa Yogyakarta':    return 'YO'; break;
      case 'Bali':                          return 'BA'; break;
      case 'Nusa Tenggara Barat':           return 'NB'; break; // Kota Mataram
      case 'Nusa Tenggara Timur':           return 'NT'; break; // Kupang
      case 'Kalimantan Barat':              return 'KB'; break;
      case 'Kalimantan Tengah':             return 'KT'; break;
      case 'Kalimantan Timur':              return 'KI'; break; // Palangkaraya
      case 'Kalimantan Selatan':            return 'KS'; break;
      case 'Kalimantan Utara':              return 'KU'; break; // Tanjung Selor
      case 'Sulawesi Utara':                return 'SA'; break; // Manado
      case 'Sulawesi Tengah':               return 'ST'; break; // Palu
      case 'Sulawesi Tenggara':             return 'SG'; break; // Kendari
      case 'Sulawesi Barat':                return 'SR'; break; // Mamuju
      case 'Sulawesi Selatan':              return 'SN'; break; // Makassar
      case 'Gorontalo':                     return 'GO'; break; // Kota Gorontalo
      case 'Maluku':                        return 'MA'; break; // Ambon
      case 'Maluku Utara':                  return 'MU'; break; // Ternate
      case 'Papua':                         return 'PA'; break; // Jayapura
      case 'Papua Barat':                   return 'PB'; break; // Manokwari
    }
  }

  // Executed on each page
  yxRoute.add('', function() {

    $('#why_yo_merchant').on('click', 'a[data-toggle="tab"]', function(e) {
      e.preventDefault();

      var $link = $(this);

      if (!$link.parent().hasClass('active')) {

        //remove active class from other tab-panes
        $('.tab-content:not(.' + $link.attr('href').replace('#','') + ') .tab-pane').removeClass('active');

        // click first submenu tab for active section
        $('a[href="' + $link.attr('href') + '_all"][data-toggle="tab"]').click();

        // activate tab-pane for active section
        $('.tab-content.' + $link.attr('href').replace('#','') + ' .tab-pane:first').addClass('active');
      }

    });

    $(function() {
      /////////////////////////////////////////////////////////////////////////
      // SHOW MORE TEXT
      //
      //

      var isMobile = false; //initiate as false
      // device detection
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
      isMobile = true;

      if(isMobile){
        $('.module.module-video').remove();
      }
    // Configure/customize these variables.
    var showChar = 100; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Hide";


    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

      /////////////////////////////////////////////////////////////////////////
      // HIDE VIDEO SOUND
      //
      //
      var isMuted = false;
$(document).on('click', '.YTPOverlay', function(e) {  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();

  if (isMuted) {
    $('.video-player').pauseYTP();
    $('.video-player').unmuteYTP();
    $('.video-player').playYTP();
  } else {
    $('.video-player').pauseYTP();
    $('.video-player').muteYTP();
    $('.video-player').playYTP();
  }
  isMuted = !isMuted;
});
      /////////////////////////////////////////////////////////////////////////
      // SIGN UP MODAL DIALOG
      //
      // Show sign in modal dialog on clicking sign up link
      $('.yx-signup-link, .yx-become-local-merchant').click(function(e){
        e.preventDefault();
        $(".modal-overlay").fadeIn(500);

        var yxSignupModal = $('#yx-signup-modal');
        yxSignupModal.show();
        // Focus on the first textbox in signup modal dialog after it is displayed
        $('#yx-signup-modal input')[0].focus();
        // Animate it to show it from top to bottom
        // Previously in css, top: -100%;
        yxSignupModal.animate({
          top: '5%'
        });
      });

      if ($('#pa_currency').exists() && yx_product == 0) {
        $('#pa_currency option:contains("IDR")').prop('selected', true);
        $('#s2id_pa_currency .select2-chosen').text('IDR');
      }

      // If sign up modal dialog is opened after clicking "Become a Local Merchant" link
      $('.yx-become-local-merchant').click(function(e) {
        e.preventDefault();
        $('#apply_for_vendor').prop('checked', true);
        $('#yx-signup-modal header > h2').text('Become a Local Merchant');
      });

      // Close sign up modal dialog on clicking close button or clicking outside
      // the modal dialog (which is when overlay is clicked)
      $('.js-modal-close').click(function() {
        $('.yx-modal-box, .modal-overlay').fadeOut(500, function() {
          $('.modal-overlay').fadeOut(300); // Hide it first

          $('.yx-modal-box').css({ // Then, make the top property back to -100%
            top: '-100%'
          });

          $('#yx-signup-modal header > h2').text('Join YoExplore');
          $('#apply_for_vendor').prop('checked', false);
        });

        // Back to focus to any first textbox on the page
        $('input[type="text"]')[0].focus();
      });

      /////////////////////////////////////////////////////////////////////////
      // SIGN IN MODAL DIALOG
      //
      // Show sign in modal dialog on clicking sign in link
      $('.yx-signin-link').click(function(e){
        e.preventDefault();
        $(".modal-overlay").fadeIn(500);

        var yxSigninModal = $('#yx-signin-modal');
        yxSigninModal.show();
        // Focus on the first textbox in signin modal dialog after it is displayed
        $('#yx-signin-modal input').get(0).focus();
        // Animate it to show it from top to bottom
        // Previously in css, top: -100%;
        yxSigninModal.animate({
          top: '5%'
        });
      });

      // Close sign in modal dialog on clicking close button or clicking outside
      // the modal dialog (which is when overlay is clicked)
      $('.js-modal-close').click(function() {
        $('.yx-modal-box, .modal-overlay').fadeOut(500, function() {
          $('.modal-overlay').fadeOut(300); // Hide it first

          $('.yx-modal-box').css({ // Then, make the top property back to -100%
            top: '-100%'
          });
        });

        // Back to focus to any first textbox on the page
        // $('input[type="text"]').get(0).focus();
      });

      /////////////////////////////////////////////////////////////////////////
      // OTHERS
      //
      // Focus on the text box "Where to go?" after page loading finished
      $('input[name="yx_explore_location"]').focus();

      // Checking whether an error is appear in signup modal dialog or signin modal dialog
      if ($('#yx-signup-modal .woocommerce-error').length > 0) {
        $('.yx-signup-link').click();
      } else if ($('#yx-signin-modal .woocommerce-error').length > 0) {
        $('.yx-signin-link').click();
      }

      $('.register-submit-button').click(function(e) {/* YOGI 16/4/2016 THROW AWAY PASSWORD CHECKING FOR SIGN-UP *//*
        var passwordStrength = $('.woocommerce-password-strength');
        if (passwordStrength.exists() && (passwordStrength.hasClass('short') || passwordStrength.hasClass('bad'))) {
          e.preventDefault();
          var error = '<ul class="woocommerce-error" style="margin-bottom: 0;">' +
                    			'<li><strong>ERROR</strong>: Please enter a stronger password. It must at least has medium strength.</li>' +
                    	'</ul>';
          $(error).insertAfter('#yx-signup-modal header');
          $('#reg_password').focus();
          $('#yx-signup-modal').scrollTop(0);
        } */

        var recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length == 0) {
          e.preventDefault();
          $('#signup_captcha_result').show();
        }
      });

      // Photo slider in product detail
      $('.photo-slider-front-page').lightSlider({
        gallery: false,
        loop: true,
        slideMargin: 0,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
      });

    }); // end $(function())
  });

  yxRoute.add(['/shop/', 'post_type=product'], function() {
    $("#goToReview").click(function() {
        $('html, body').animate({
            scrollTop: $('#reviewSection').offset().top
        }, 1000);
    });

    function adjustProductDetailMargin() {
      var navbarHeight = $('.navbar .containers').css('height');
      $('#product-detail-content').css({'margin-top': navbarHeight});
    }

    // Re-Set the margin of #product-detail the when the window is resized
    $(window).resize(adjustProductDetailMargin);
    // Set the margin-top of #product-detail according to the height of fixed header nav
    $(document).ready(function() {
      // Displaying contact merchant form
      $('#open-form-personalize-offer').click(function() {
        $('#form-personalize-offer .yx-form-fields').show();
        $('#form-personalize-offer #personalize-response').hide();
        $('#form-personalize-offer').fadeIn();
        $('#message-title').focus();
      });
      // Hide form after clicking Cancel button
      $('#btn-cancel-send-message').click(function() {
        $('#form-personalize-offer').hide();
      });

      // Displaying add review form
      $('#btn-add-review').click(function() {
        $('#review_form_wrapper').show();
        $('#review_form_wrapper #comment').focus();
      });
      $('#btn-cancel-add-review').click(function() {
        $('#review_form_wrapper').hide();
      });

      // Send the message
      $('#btn-send-message').click(function(e) {
        if (typeof($(this).data('preview')) != 'undefined' && $(this).data('preview') == 'yes') {
          displayPersonalizeResponse('You cannot send personalized offer message to yourself.', 'warning');
        } else {
          var errorMessages = new Array();
          var to = $('#message-to').val(),
              subject = $('#message-title').val().trim(),
              message = $('#message-content').val().trim();
          if (subject == '') {
            errorMessages.push('<a class="gotoField" href="#message-title">Title</a>');
          }
          if (message == '') {
            errorMessages.push('<a class="gotoField" href="#message-content">Message</a>');
          }

          if (errorMessages.length > 0) {
            displayPersonalizeResponse('Please fill ' + errorMessages.join(' and ') + ' first.', 'warning');
          } else {
            var param = {
              'action': 'personalize_offer_message',
              'to': to,
              'subject': subject,
              'message': message,
            };
            $.ajax({
              url: ajaxurl,
              data: param,
              method: 'POST',
              beforeSend: function() {
                $('#form-personalize-offer .yx-form-fields').hide();
                $('#form-personalize-offer .yx-preloader').fadeIn();
              },
              success: function(r) {
               r = jQuery.parseJSON(r);
               if (r.status == 'success') {
                 displayPersonalizeResponse('<strong>Success!</strong><br>' + r.message[0], 'success');

                 $('#form-personalize-offer').get(0).reset();
               } else if (r.status == 'fail') {
                 var errorMessage = '';
                 $.each(r.message, function(key, val) {
                   errorMessage += val + '<br>';
                 });

                 displayPersonalizeResponse('<strong>Failed!</strong><br>' + errorMessage, 'danger');
               }
               $('#form-personalize-offer .yx-preloader').fadeOut();
               $('#form-personalize-offer .yx-form-fields').fadeIn()
             }
            });
          }
        }
      });
      $('#personalize-response .close').click(function() {
        $('#personalize-response').fadeOut();
      });
      $(document).on('click', '.gotoField', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        $($(this).attr('href')).focus();
      });

      function displayPersonalizeResponse(message, type) {
        console.log('error: ' + message + '\n' + type);
        alertBox = $('#personalize-response');
        alertBox.removeClass('alert-danger alert-warning alert-info alert-success');
        alertBox.addClass('alert-' + type);
        alertBox.find('.message').html(message);

        alertBox.fadeIn();
      }

      $('a[href="#reviews"]').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: $('#reviews').offset().top
        }, 500);
      });

      // adjustProductDetailMargin();
      // Photo slider in product detail
      $('.photo-slider').lightSlider({
        gallery: true,
        item: 2,
        loop: true,
        slideMargin: 0,
        thumbItem: 5,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
      });

      // Photo slider in product detail
      $('.photo-slider-related-offers').lightSlider({
        gallery: false,
        loop: true,
        slideMargin: 10,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
      });

      // Photo slider in product detail
      $('.photo-slider-offers').lightSlider({
        gallery: false,
        loop: true,
        slideMargin: 10,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.product-info-will-hide').fadeOut(200);
          adjustProductDetailMargin();
        } else {
          $('.product-info-will-hide').fadeIn(300);
          adjustProductDetailMargin();
        }
      });

      /////////////////////////////////////////////////////////////////////////
      // SHOW MAP MODAL DIALOG
      //
      // When show map button on the product detail is clicked
      var btnMapModal = $('#show-map-modal');
      btnMapModal.click(function(e) {
        e.preventDefault();
        yx_shop_modal_map('product-detail');
      });

      function yx_shop_modal_map(target) {
        if (target == 'product-detail')
          yx_map_product_detail_initialize();
        else if (target == 'meeting-point')
          yx_map_meeting_point_initialize();

        $('.map-modal-overlay').fadeIn(500);
        var yxSignupModal = $('#yx-show-map-modal');
        yxSignupModal.show();
        yxSignupModal.animate({
          top: '20%'
        });
      }

      // Close show map modal dialog on clicking close button or clicking outside
      // the modal dialog (which is when overlay is clicked)
      $('.js-map-modal-close').click(function() {
        $('.map-modal-box, .map-modal-overlay').fadeOut(500, function() {
          $('.map-modal-overlay').fadeOut(300); // Hide it first

          $('.map-modal-box').css({ // Then, make the top property back to -100%
            top: '-100%'
          });
        });

        // Back to focus to any first textbox on the page
        // $('input[type="text"]').get(0).focus();
      });

      // Initialize google map for product detail address
      function yx_map_product_detail_initialize() {
        var latlng = new google.maps.LatLng(btnMapModal.attr('data-latitude'), btnMapModal.attr('data-longitude'));
        var options = {
          zoom: 15,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("yx_map_product_detail"), options);
        marker = new google.maps.Marker({
          position: latlng
        });
        marker.setMap(map);
      }


      var btnMeetingMapModal = $('#show-meeting-map-modal');
      btnMeetingMapModal.click(function(e) {
        e.preventDefault();
        yx_shop_modal_map('meeting-point');
      });

      // Initialize google map for meeting point location
      function yx_map_meeting_point_initialize() {
        var latlng = new google.maps.LatLng(btnMeetingMapModal.attr('data-latitude'), btnMeetingMapModal.attr('data-longitude'));
        var options = {
          zoom: 15,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("yx_map_product_detail"), options);
        marker = new google.maps.Marker({
          position: latlng
        });
        marker.setMap(map);
      }

      $('#set-booking-date').click(function() {
        $('#modal-pinpoint-calendar').modal();
      });
    });
  });

  yxRoute.add('my-account/lost-password', function() {
    $(function() {
      $('input[type="submit"]').click(function(e) {
        if ($('#user_login').val().trim() == '') {
          e.preventDefault();
          alert('Please ener your username/email first');
          $('#user_login').focus();
        }

        var recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length == 0) {
          e.preventDefault();
          $('#lost_password_captcha_result').show();
        }
      });
    });
  });

  yxRoute.add('my-account', function() {
    var autocomplete;
    var city = $('#autocompleted_city').get(0);
    autocomplete = new google.maps.places.Autocomplete(city, {
      types: ['(cities)'],
      componentRestrictions: {'country': 'ID'}
    });




    $(function() {
      $('.btn-manage-booking').click(function(){
        $('#order-to-be-cancelled').val($(this).data('order-id'));
        console.log($(this).data('order-id'));
      });

      // For datepicker, for date of birth field in user profile
      $('.edit-account #date_of_birth').datepicker({
        dateFormat : 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: '1950:' + new Date().getFullYear()
      });

      // When create itinerary radio button is checked, show create itinerary form
      $('#create_itinerary, #retrieve_itinerary').on('change', function() {
        if ($('#create_itinerary').is(':checked')) {
          $('.create-itinerary-form').show();
          $('.retrieve-itinerary-form').hide();
        } else if (!$('#create_itinerary').is(':checked')) {
          $('.create-itinerary-form').hide();
          $('.retrieve-itinerary-form').show();
        }
      });

      // When "Write to Admin" button is clicked, show write message form
      $('.write-message-button').click(function() {
        $('.write-message-form').show();
        $('.inbox-empty').hide();
      });

      // When "Cancel" button in contact form is clicked, hide write message form
      $('.write-message-form-cancel').click(function() {
        $('.write-message-form').hide();
        $('.inbox-empty').show();
      });

      // In My Booking, when user click Submit Review button
      $('.booking-submit-review').click(function() {
        $('.booking-submit-review-form').show();
        $('.booking-view-review-div').hide();
      });

      // In My Booking, in the form add review, when user click Cancel button to cancel adding review
      $('.booking-cancel-add-review').click(function() {
        $('.booking-submit-review-form').hide();
      });

      // In My Booking, when user click View Review button
      $('.booking-view-review').click(function() {
        $('.booking-view-review-div').show();
        $('.booking-submit-review-form').hide();
      });

      // In My Booking, when user click Hide button after a review is shown
      $('.booking-hide-review').click(function() {
        $('.booking-view-review-div').hide();
      });

      // In My Point, when About Yo!Xplor Point button is clicked, show info about My Points feature. Hide other forms/divs
      $('a.about-point').click(function() {
        $('.my-point-about').show();
        $('.my-point-earn').hide();
        $('.my-point-redeem').hide();

        // Set about point link to be the one that is active
        $('a.about-point').addClass('active');
        $('a.earn-point').removeClass('active');
        $('a.redeem-point').removeClass('active');
      });

      // In My Point, when Earn Points button is clicked, show info about Earned points of the user
      $('a.earn-point').click(function() {
        $('.my-point-about').hide();
        $('.my-point-earn').show();
        $('.my-point-redeem').hide();

        // Set earn point link to be the one that is active
        $('a.about-point').removeClass('active');
        $('a.earn-point').addClass('active');
        $('a.redeem-point').removeClass('active');
      });

      // In My Point, when Redeem points button is clicked, show redeem point form. Hide other forms/divs in My Points
      $('a.redeem-point').click(function() {
        $('.my-point-about').hide();
        $('.my-point-earn').hide();
        $('.my-point-redeem').show();

        // Set redeem point link to be the one that is active
        $('a.about-point').removeClass('active');
        $('a.earn-point').removeClass('active');
        $('a.redeem-point').addClass('active');
      });

      // Show the merchant category select box when apply becoming a local merchant
      $('#apply_for_vendor:checkbox').click(function(){
        if ($('#apply_for_vendor:checkbox:checked').length > 0) {
          $('.vendor-register-step1').show();
        } else {
          $('.vendor-register-step1').hide();
        }
      });

      // Show the form for entering merchant data after the merchant registrant selecting a merchant category
      $('select#reg_yx_vendor_category').on('change', function(e) {
        var vendor = $('.vendor-register-step2');

        if ($('select#reg_yx_vendor_category').val() != '0') {
          vendor.show();
        } else {
          vendor.hide();
        }
      });
    });
  });

  yxRoute.add('explore', function() {
    // /////////////////////////////mapp/////////////////////////////////////////////////
    // Initialize google map for product detail address
    // var map, marker;
    function yx_map_explorer_guide(){
      // Define your locations: HTML content for the info window, latitude, longitude


          // Setup the different icons and shadows
          var iconURLPrefix = 'http://localhost/wordpress/wp-content/uploads/2016/05/';

          var icons = [
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png',
            iconURLPrefix + 'map_marker_tour.png'
          ]
          var iconsLength = icons.length;

          var map = new google.maps.Map(document.getElementById('yx_map_explorer'), {
            zoom: 10,
            center: new google.maps.LatLng(-37.92, 151.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            panControl: false,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM
            }
          });

          var infowindow = new google.maps.InfoWindow({
            maxWidth: 160
          });

          var markers = new Array();

          var iconCounter = 0;

          // Add the markers and infowindows to the map
          for (var i = 0; i < yx_locations.length; i++) {
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(yx_locations[i][1], yx_locations[i][2]),
              map: map,
              icon: icons[iconCounter]
            });

            markers.push(marker);

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));

            iconCounter++;
            // We only have a limited number of possible icon colors, so we may have to restart the counter
            if(iconCounter >= iconsLength) {
            	iconCounter = 0;
            }
          }

          function autoCenter() {
            //  Create a new viewpoint bound
            var bounds = new google.maps.LatLngBounds();
            //  Go through each...
            for (var i = 0; i < markers.length; i++) {
      				bounds.extend(markers[i].position);
            }
            //  Fit these bounds to the map
            map.fitBounds(bounds);
          }
          autoCenter();
      // var latlng = new google.maps.LatLng(-6.482367, 106.8016858);
      // var options = {
      //   zoom: 15,
      //   center: latlng,
      //   mapTypeId: google.maps.MapTypeId.ROADMAP
      // };
      //
      // map = new google.maps.Map(document.getElementById("yx_map_explorer"), options);
      // var iconBase = 'http://localhost/wordpress/wp-content/uploads/2016/05/';
      //   marker = new google.maps.Marker({
      //   position: latlng,
      //   map: map,
      //   icon: iconBase + 'map_marker_tour.png'
      // });


      // marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', function() { yx_map_explorer_guide(); });


    $(function() {
      $('.link-more-sub').click(function(e) {
        e.preventDefault();
        $('.link-less-sub[data-target="' + $(this).data('target') + '"]').show();
        $(this).hide();
        $('.more-sub-' + $(this).data('target')).show();
      });

      $('.link-less-sub').click(function(e) {
        e.preventDefault();
        $('.link-more-sub[data-target="' + $(this).data('target') + '"]').show();
        $(this).hide();
        $('.more-sub-' + $(this).data('target')).hide();
      });


      /////////////////////////////////////////////////////////////////////////
      // SHOW MORE IMAGES
      //
      //
      $(document).ready(function() {
          var images = $(".handler > div").hide(), x = 3;
          var showMore = $('#showMore');
          var showLess = $('#showLess');
          var funcs = {
             'showMore': function() { ++x; show(); },
             'showLess': function() { --x; show(); }
          }
          $('.controls').on('click', 'a', function(e){
              return (funcs[e.target.id] || function(){})(), false;
          });
          function show() {
              images.hide().filter(function(i){ return i < (x * 3); }).show();
              showMore.show().filter(function(){ return !images.is(':hidden'); }).hide();
              showLess.show().filter(function(){ return x === 1; }).hide();
          }
          show();
      });

      // In the explore page, to filter the availability
      $('#availability-from').datepicker({
        dateFormat : 'yy-mm-dd',
        changeMonth: true
      });
      $('#availability-to').datepicker({
        dateFormat : 'yy-mm-dd',
        changeMonth: true
      });

      // In the explore page, to filter the price range
      var price = $('#slider-price');
      price.slider({
        range: true,
        min: 0,
        max: 10000,
        values: [800, 3500],
        slide: function(event, ui) {
          $('#price-minimum').val(ui.values[0]);
          $('#price-maximum').val(ui.values[1]);
        }
      });
      priceMin = price.slider('values', 0);
      priceMax = price.slider('values', 1);
      $('#price-minimum').val(priceMin);
      $('#price-maximum').val(priceMax);
    });

    // $('[href="#tab2"]').closest('li').hide();
  });

  yxRoute.add(['^.*dashboard/product/edit/$', '^.*dashboard/product/edit/(0-9)?'], function() {
    /////////////////////////////////////////////////////////////////////////
    // MAP FOR PRODUCT LOCATION
    var map, marker, geocoder, autocomplete;
    var countryCode, provCode;

    // var updateMarker = true;
    // if (yx_product > 0) {
    //   updateMarker = false;
    // }

    // Initialize Google Map
    // If bigZoom == true, then zoom it 15x, otherwise zoom it 5x
    function yx_map_product_edit_initialize(bigZoom) {
      var options = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("yx_map_product_edit"), options);
      marker = new google.maps.Marker({
        draggable: true,
        map: map
      });

      google.maps.event.addListener(marker, 'drag', yx_map_marker_position);
      google.maps.event.addListener(marker, 'dragend', yx_map_marker_position);
      google.maps.event.addListener(map, 'click', function(e) {
        marker.setPosition(e.latLng);
        yx_map_marker_position();
      });

      var city = $('#wcv_custom_product_city_input').get(0);
      countryCode = $('#wcv_custom_product_country').val();
      autocomplete = new google.maps.places.Autocomplete(city, {
        types: ['(cities)'],
        componentRestrictions: {'country': countryCode}
      });
      autocomplete.addListener('place_changed', yx_map_on_place_changed);

      // If this form is for adding new offer (not for editing offer)
      if (yx_product == 0) {
        // Check whether geolocation is supported
        if (navigator.geolocation) {
          var startPos;
          var geoOptions = {
            maximumAge: 5 * 60 * 1000,
            timeout: 10 * 1000
          };

          var geoSuccess = function(position) {
            startPos = position;
            console.log('latitude: ' + startPos.coords.latitude);
            console.log('longitude: ' + startPos.coords.longitude);

            var lat = startPos.coords.latitude;
            var lng = startPos.coords.longitude;
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&language=id&result_type=administrative_area_level_1&key=AIzaSyD49vhXLJMb4h03l5jwQpPiVZpOt9pmxqU&sensor=false';
            $.getJSON(url, function(r) {
              if (r.status == 'OK') {
                // See JSON response through Network tab in developer tools for details
                var provinceName = getProvinceName(r.results[0].address_components);
                var provinceCode = getProvinceCode(provinceName);
                console.log('Province name: ' + provinceName + ', Province code: ' + provinceCode);

                var provinceName = $('#wcv_custom_product_province option[value="' + provinceCode + '"]').text();
                $('#wcv_custom_product_province').val(provinceCode);
                $('#wcv_custom_product_meeting_province').val(provinceName);
                $('#s2id_wcv_custom_product_province .select2-chosen').text($('#wcv_custom_product_province option[value="' + $('#wcv_custom_product_province').val() + '"]').text());

                $('#wcv_custom_product_latitude_input').val(lat);
                $('#wcv_custom_product_longitude_input').val(lng);
                yx_map_update_location(true, false);
              }
            });
          };
          var geoError = function(error) {
            // 0 => unknown error, 1 => permission denied, 2 => position unavailable (error response from location provider), 3 => timed out
            console.log('Error occured. Error code: ' + error.code);
            yx_map_update_location(bigZoom, true);
          };

          navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
        } else {
          console.log('Geolocation is not supported for this Browser/OS version yet.');
          yx_map_update_location(bigZoom, true);
        }
      } else {
        yx_map_update_location(bigZoom, false);
      }
    }
    // Execute google map initialization (yx_gm_initialize) whenever the window browser is loaded
    if (yx_product > 0) {
      google.maps.event.addDomListener(window, 'load', function() { yx_map_product_edit_initialize(true) });
    } else {
      google.maps.event.addDomListener(window, 'load', function() { yx_map_product_edit_initialize(false); });
    }

    $('.yx-product-location').click(function() {
      if (yx_product == 0 && $('#wcv_custom_product_latitude_input').val() == '') {
        yx_map_update_location(false, true);
      }
    });

    // Update the position/location shown on the map based on the province/country selected
    // If bigZoom == true then show map with zoom 15x, otherwise zoom it 5x
    // If newMarkerPosition == true, then set marker in a new position, otherwise set marker position as center of the map
    function yx_map_update_location(bigZoom, newMarkerPosition) {
      provCode = $('#wcv_custom_product_province').val();
      countryCode = $('#wcv_custom_product_country').val();
      var address = $('#wcv_custom_product_province option[value="' + provCode + '"]').text() +
          ', ' +
          $('#wcv_custom_product_country option[value="' + countryCode + '"]').text();
      geocoder = new google.maps.Geocoder();
      autocomplete.setComponentRestrictions({country: countryCode});

      geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (newMarkerPosition) {
            map.setCenter(results[0].geometry.location);
            marker.setPosition(map.getCenter());
            yx_map_marker_position();
          } else {
            var lat = $('#wcv_custom_product_latitude_input').val();
            var lng = $('#wcv_custom_product_longitude_input').val();
            map.setCenter(new google.maps.LatLng(lat, lng));
            marker.setPosition(new google.maps.LatLng(lat, lng));
          }
          (bigZoom) ? map.setZoom(15) : map.setZoom(5);
        }
      });
    }

    // After marker position is changed, update the value of latitude and longitude textboxes
    function yx_map_marker_position() {
      var lat = marker.getPosition().lat();
      var lng = marker.getPosition().lng();

      $('#wcv_custom_product_latitude_input').val(lat);
      $('#wcv_custom_product_longitude_input').val(lng);
    }

    // Update the map after user change the city
    function yx_map_on_place_changed() {
      var place = autocomplete.getPlace();
      console.log('place changed');

      if(place.geometry) {
        map.panTo(place.geometry.location);
        marker.setPosition(place.geometry.location);
        yx_map_marker_position();
        map.setZoom(15);
      }
    }

    /////////////////////////////////////////////////////////////////////////
    // MAP FOR MEETING POINT

    var meetingMap, meetingMarker, meetingGeocoder, meetingAutocomplete;

    // Initialize Google Map
    function yx_map_meeting_point_initialize(bigZoom) {
      console.log('dooorrr');
      var options = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      meetingMap = new google.maps.Map(document.getElementById("yx_map_meeting_point"), options);
      meetingMarker = new google.maps.Marker({
        draggable: true,
        map: meetingMap
      });

      console.log(meetingMarker);

      google.maps.event.addListener(meetingMarker, 'drag', yx_map_meeting_point_marker_position);
      google.maps.event.addListener(meetingMarker, 'dragend', yx_map_meeting_point_marker_position);
      google.maps.event.addListener(meetingMap, 'click', function(e) {
        meetingMarker.setPosition(e.latLng);
        yx_map_meeting_point_marker_position();
      });

      google.maps.event.addListenerOnce(meetingMap, 'idle', function(){
        var center = meetingMap.getCenter();
        google.maps.event.trigger(meetingMap, "resize");
        meetingMap.setCenter(center);
      });

      var city = $('#wcv_custom_product_meeting_city').get(0);
      meetingAutocomplete = new google.maps.places.Autocomplete(city, {
        types: ['(cities)'],
        componentRestrictions: {'country': countryCode}
      });
      meetingAutocomplete.addListener('place_changed', yx_map_on_meeting_place_changed);

      // If this form is for adding new offer (not for editing offer)
      if (yx_product == 0) {
        yx_map_meeting_point_update_location(bigZoom, true);
      } else {
        yx_map_meeting_point_update_location(bigZoom, false);
      }
    }

    function yx_map_on_meeting_place_changed() {
      // Update the map after user change the city
      var place = meetingAutocomplete.getPlace();
      console.log('meeting point city changed');

      if(place.geometry) {
        meetingMap.panTo(place.geometry.location);
        meetingMarker.setPosition(place.geometry.location);
        yx_map_meeting_point_marker_position();
        meetingMap.setZoom(15);
      }
    }

    // Update the position/location shown on the map based on the province/country selected
    function yx_map_meeting_point_update_location(bigZoom, newMarkerPosition) {
      console.log('meeting_point_update_location()');
      provCode = $('#wcv_custom_product_province').val();
      countryCode = $('#wcv_custom_product_country').val();
      var address = $('#wcv_custom_product_province option[value="' + provCode + '"]').text() +
          ', ' +
          $('#wcv_custom_product_country option[value="' + countryCode + '"]').text();
      meetingGeocoder = new google.maps.Geocoder();

      meetingGeocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (newMarkerPosition) {
            meetingMap.setCenter(results[0].geometry.location);
            meetingMarker.setPosition(map.getCenter());
            yx_map_meeting_point_marker_position();
          } else {
            console.log('no new marker address');
            var lat = $('#wcv_custom_product_meeting_point_latitude_input').val();
            var lng = $('#wcv_custom_product_meeting_point_longitude_input').val();
            meetingMap.setCenter(new google.maps.LatLng(lat, lng));
            meetingMarker.setPosition(new google.maps.LatLng(lat, lng));
          }
          (bigZoom) ? meetingMap.setZoom(15) : meetingMap.setZoom(5);
        }
      });
    }

    function yx_map_meeting_point_marker_position() {
      console.log(meetingMarker.getPosition());
      if (typeof(meetingMarker.getPosition) != 'undefined') {
        var lat = meetingMarker.getPosition().lat();
        var lng = meetingMarker.getPosition().lng();

        $('#wcv_custom_product_meeting_point_latitude_input').val(lat);
        $('#wcv_custom_product_meeting_point_longitude_input').val(lng);
      }
    }

    function validateGeneralTab() {
      var valid = true;
      var validationMessage = '';

      // Validate offer title
      if ($('#post_title').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#post_title" data-action="focus" data-tab="general">Offer Title</a></li>';
      }
      // Validate highlight offers
      if ($('#highlight-list li').length == 0) {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target=".cur-highlight" data-action="focus" data-tab="general">Highlight Offers</a></li>';
      }
      // Validate offer description
      if (tinyMCE.get('post_content').getContent().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" onclick="jQuery(\'li a.general\')[0].click(); tinyMCE.get(\'post_content\').focus(); return false;" data-tab="general">Description</a></li>';
      }
      // Validate product code
      if ($('#_sku').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#_sku" data-action="focus" data-tab="general">Offer Code</a></li>';
      }
      // Validate product subcategories
      if ($('.product-subcategory select').val() === null) {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target=".sel_product_subcat input" data-action="click" data-tab="general">Subcategories</a></li>';
      }

      // Append error messages
      $('#wcv-product-edit > .alert .general ol').html(validationMessage);

      return valid;
    }

    function validateLocationTab() {
      var valid = true;
      var validationMessage = '';

      // Validate city text field
      if ($('#wcv_custom_product_city_input').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_city_input" data-action="focus" data-tab="location">City</a></li>';
      }
      // Validate nearest major airport
      if ($('#wcv_custom_product_airport').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" onclick="jQuery(\'li a.location\')[0].click(); jQuery(\'#wcv_custom_product_airport\').select2(\'open\'); return false;" data-tab="location">Nearest Major Airport</a></li>';
      }

      // Append error messages
      $('#wcv-product-edit > .alert .location ol').html(validationMessage);

      return valid;
    }

    function validateMediaTab() {
      var valid = true;
      var validationMessage = '';

      // Validation for featured image
      if ($('#_featured_image_id').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="a.wcv-media-uploader-featured-add" data-action="click" data-tab="media">Featured Image</a></li>';
      }
      // Validation for gallery
      if ($('#product_image_gallery').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target=".wcv-media-uploader-gallery a" data-action="click" data-tab="media">Gallery</a></li>';
      } else {
        var image_gallery = $('#product_image_gallery').val().trim();
        image_gallery = image_gallery.split(',');
        image_gallery_length = image_gallery.length;
        if (image_gallery.indexOf('') >= 0)
          image_gallery_length -= 1;

        if (image_gallery_length < 5) {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target=".wcv-media-uploader-gallery a" data-action="click" data-tab="media">Gallery</a> (Minimum 5 images for gallery. Please add more.)</li>';
        }
      }

      // Append error messages
      $('#wcv-product-edit > .alert .media ol').html(validationMessage);

      return valid;
    }

    function validateInclusionTab() {
      var valid = true;
      var validationMessage = '';

      // Validation for inclusion
      if (document.getElementById('pa_inclusion[]').value == '' && $('#pa_other_inclusion').val().trim() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target=".product_inclusion input" data-action="click" data-tab="inclusion">Inclusion and/or Other Inclusion</a></li>';
      }

      // Validation for inclusive hotel/pick-up and drop-off
      if ($('#yes-pickup').prop('checked')) {
        if ($('#wcv_custom_product_pickup_area').val().trim() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_pickup_area" data-action="focus" data-tab="inclusion">Picking up coverage area</a></li>';
        }
        if ($('#wcv_custom_product_pickup_time').val().trim() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_pickup_time" data-action="focus" data-tab="inclusion">Time to pickup guests</a></li>';
        }
      } else if ($('#no-pickup').prop('checked')) {
        if ($('#wcv_custom_product_meeting_address').val().trim() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_meeting_address" data-action="focus" data-tab="inclusion">Address</a></li>';
        }
        if ($('#wcv_custom_product_meeting_city').val().trim() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_meeting_city" data-action="focus" data-tab="inclusion">City</a></li>';
        }
      }

      // Append error messages
      $('#wcv-product-edit > .alert .inclusion ol').html(validationMessage);

      return valid;
    }

    function validateDurationTab() {
      var valid = true;
      var validationMessage = '';
      var days = $('#wcv_custom_product_dur_days_input').val().trim(),
          hours = $('#wcv_custom_product_dur_hours_input').val().trim();

      // Validation for duration days and hours
      if ((days == '' || days == '0') && (hours == '' || hours == '0')) {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#wcv_custom_product_dur_days_input" data-action="focus" data-tab="duration">Duration</a></li>';
      }

      // Append error messages
      $('#wcv-product-edit > .alert .duration ol').html(validationMessage);

      return valid;
    }

    function validatePricingTab() {
      var valid = true;
      var validationMessage = '';

      // Validate per person pricing specific fields
      if ($('#person-pricing').prop('checked')) {
        // Validation for minimum number of child
        if ($('#min_n_child').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#min_n_child" data-action="focus" data-tab="pricing">Min number of child</a></li>';
        }
        // Validation for maximum number of child
        if ($('#max_n_child').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#max_n_child" data-action="focus" data-tab="pricing">Max number of child</a></li>';
        }

        // Validation for minimum number of adult
        if ($('#min_n_adult').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#min_n_adult" data-action="focus" data-tab="pricing">Min number of adult</a></li>';
        }
        // Validation for maximum number of adult
        if ($('#max_n_adult').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#max_n_adult" data-action="focus" data-tab="pricing">Max number of adult</a></li>';
        }
      }
      // Validate per group pricing specific fields
      else if ($('#group-pricing').prop('checked')) {
        // Validation for unit type
        if ($('#opt_product_unit_type_from_list').prop('checked')) {
          // If unit type is selected from the select box
          if ($('#yx_product_unit_type').val() == '') {
            valid = false;
            validationMessage += '<li><a href="#" onclick="jQuery(\'li a.pricing\')[0].click(); jQuery(\'#yx_product_unit_type\').select2(\'open\'); return false;" data-tab="pricing">Unit type</a></li>';
          }
        } else if ($('#opt_product_unit_type_custom').prop('checked')) {
          // If unit type is a custom unit type
          if ($('#yx_product_unit_type_custom').val() == '') {
            valid = false;
            validationMessage += '<li><a href="#" class="gotoField" data-target="#yx_product_unit_type_custom" data-action="focus" data-tab="pricing">Unit type</a></li>';
          }
        }

        // Validation for maximum number of unit type per booking
        if ($('#max_unit_type_per_booking').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#max_unit_type_per_booking" data-action="focus" data-tab="pricing">Maximum number of unit type per booking</a></li>';
        }
        // Validation for maximum number of people per unit type
        if ($('#max_people_per_unit_type').val() == '') {
          valid = false;
          validationMessage += '<li><a href="#" class="gotoField" data-target="#max_people_per_unit_type" data-action="focus" data-tab="pricing">Maximum number of people per unit type</a></li>';
        }
      }

      // Validation for minimum child age
      if ($('#min_child_age').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#min_child_age" data-action="focus" data-tab="pricing">Minimum child age</a></li>';
      }
      // Validation for minimum child age
      if ($('#max_child_age').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#max_child_age" data-action="focus" data-tab="pricing">Maximum child age</a></li>';
      }

      // Validation for minimum adult age
      if ($('#min_adult_age').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#min_adult_age" data-action="focus" data-tab="pricing">Minimum adult age</a></li>';
      }
      // Validation for minimum adult age
      if ($('#max_adult_age').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#max_adult_age" data-action="focus" data-tab="pricing">Maximum adult age</a></li>';
      }

      // Validation for maximum booking hours in advance
      if ($('#yx_max_booking_hours').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#yx_max_booking_hours" data-action="focus" data-tab="pricing">Maximum booking hours in advance</a></li>';
      }

      // Validation for cancellation policy
      if ($('#yx_cancelation_policy').val() == '') {
        valid = false;
        validationMessage += '<li><a href="#" class="gotoField" data-target="#yx_cancelation_policy" data-action="focus" data-tab="pricing">Cancellation Policy</a></li>';
      }

      // Validate whether the calendar is empty
      if (!yx_is_price_in_calendar_exist) {
        valid = false;
        validationMessage += '<li><a href="#" onclick="jQuery(\'li a.pricing\')[0].click(); jQuery(\'html, body\').animate({scrollTop: jQuery(\'#DOPBSP-column2\').offset().top}, 300); return false;">Available date and pricing</a></li>';
      }

      // Append error messages
      $('#wcv-product-edit > .alert .pricing ol').html(validationMessage);

      return valid;
    }

    $(function() {
      // Related to button "Next" and "Publish"
      // Note: yx_product is declared in product-edit.php. It contains 0 when there is no product
      // being selected to be edited. It is not edit product, but add new product.
      // So, when it is edit product, we won't hide the Publish button.
      if (yx_product == 0) {
        $('.btn-publish-product').prop('disabled', true);
      }

      $('.yx-product-general, .yx-product-location, .yx-product-media, .yx-product-inclusion, .yx-product-duration').click(function()  {
        if (yx_product == 0) {
          $('.btn-publish-product').prop('disabled', true);
        }

        if ($(this).hasClass('yx-product-general'))
          $('#prev_button').prop('disabled', true);
        else
          $('#prev_button').prop('disabled', false);

        $('#next_button').prop('disabled', false);

        if ($(this).hasClass('yx-product-inclusion')) {
          if (!meetingMap) {
            if (yx_product > 0)
              yx_map_meeting_point_initialize(true);
            else
              yx_map_meeting_point_initialize(false);
          } else {
            var center = meetingMap.getCenter();
            google.maps.event.trigger(meetingMap, "resize");
            meetingMap.setCenter(center);
          }
        }
      });

      $('.yx-product-pricing').click(function() {
        if (yx_product == 0) {
          $('.btn-publish-product').prop('disabled', false);
        }

        $('#next_button').prop('disabled', true);
        $('#prev_button').prop('disabled', false);
      });

      $('#prev_button').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        $('.tabs-nav li.active').prev().find('a')[0].click();

        $('html, body').animate({
            scrollTop: $("#wcv-product-edit").offset().top
        }, 300);
      });

      $('#next_button').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var valid = true;
        if ($('li.active a').hasClass('general')) {
          valid = validateGeneralTab();
        } else if ($('li.active a').hasClass('location')) {
          valid = validateLocationTab();
        } else if ($('li.active a').hasClass('media')) {
          valid = validateMediaTab();
        } else if ($('li.active a').hasClass('inclusion')) {
          valid = validateInclusionTab();
        } else if ($('li.active a').hasClass('duration')) {
          valid = validateDurationTab();
        } else if ($('li.active a').hasClass('pricing')) {
          valid = validatePricingTab();
        }

        if (valid) {
          if ( yx_product == 0 ) {
            $('.yx-preloader.preloader_next_button').show();

            var formData = new FormData($(this)[0].form);
            formData.append('draft_button', true);
            formData.append('action', 'yx_save_offer_on_next');
            formData.append('presave', true);
            formData.set('post_content', tinyMCE.get('post_content').getContent().trim());

            $.ajax({
              url: ajaxurl,
              type: 'POST',
              data: formData,
              async: false,
              beforeSend: function() {
                $('html, body').animate({
                    scrollTop: $("#wcv-product-edit").offset().top
                }, 300);
              },
              success: function (r) {
                r = $.parseJSON(r);
                console.log(r);
                if (r.status == 'OK') {
                  if ($('#presave_post_id').length == 0) {
                    $('#next_button').closest('.col-sm-12').append('<input type="hidden" name="post_id" value="' + r.product_id + '" id="presave_post_id">');
                    // $('.woocommerce').html('<div class="woocommerce-message">All the data that you have inputted on previous steps has been saved as draft for safety while you are continuing to complete all the steps.</div>');
                  }
                }

                var nextTab = $('.tabs-nav li.active').next().find('a')[0].click();
                $('#wcv-product-edit > .alert').hide();
                $('.yx-preloader.preloader_next_button').hide();
              },
              error: function(r) {
                var nextTab = $('.tabs-nav li.active').next().find('a')[0].click();
                $('#wcv-product-edit > .alert').hide();
                $('yx-preloader.preloader_next_button').hide();
              },
              cache: false,
              contentType: false,
              processData: false
            });
          } else {
            $('html, body').animate({
                scrollTop: $("#wcv-product-edit").offset().top
            }, 300);

            var nextTab = $('.tabs-nav li.active').next().find('a')[0].click();
            $('#wcv-product-edit > .alert').hide();
          }
        } else {
          $('html, body').animate({
              scrollTop: $("#wcv-product-edit").offset().top
          }, 300);

          $('#wcv-product-edit > .alert').show();
          $('#wcv-product-edit > .alert .error-in-tab').hide();
          $('#wcv-product-edit > .alert .error-in-tab span').hide();

          if ($('li.active a').hasClass('general')) {
            $('#wcv-product-edit > .alert .general').show();
          } else if ($('li.active a').hasClass('location')) {
            $('#wcv-product-edit > .alert .location').show();
          } else if ($('li.active a').hasClass('media')) {
            $('#wcv-product-edit > .alert .media').show();
          } else if ($('li.active a').hasClass('inclusion')) {
            $('#wcv-product-edit > .alert .inclusion').show();
          } else if ($('li.active a').hasClass('duration')) {
            $('#wcv-product-edit > .alert .duration').show();
          } else if ($('li.active a').hasClass('pricing')) {
            $('#wcv-product-edit > .alert .pricing').show();
          }
        }
      });

      $('#save_button').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var isValid = {
          'General'   : validateGeneralTab(),
          'Location'  : validateLocationTab(),
          'Media'     : validateMediaTab(),
          'Inclusion' : validateInclusionTab(),
          'Duration'  : validateDurationTab(),
          'Pricing'   : validatePricingTab()
        };

        var valid = true;
        if (!isValid.General    ||
            !isValid.Location   ||
            !isValid.Media      ||
            !isValid.Inclusion  ||
            !isValid.Duration   ||
            !isValid.Pricing) {
          $('#wcv-product-edit > .alert').show();
          $('#wcv-product-edit > .alert .error-in-tab').hide();
          $('#wcv-product-edit > .alert .error-in-tab span').hide();

          if (!isValid.General) {
            $('#wcv-product-edit > .alert .general').show();
            $('#wcv-product-edit > .alert .general span').show();
          }
          if (!isValid.Location) {
            $('#wcv-product-edit > .alert .location').show();
            $('#wcv-product-edit > .alert .location span').show();
          }
          if (!isValid.Media) {
            $('#wcv-product-edit > .alert .media').show();
            $('#wcv-product-edit > .alert .media span').show();
          }
          if (!isValid.Inclusion) {
            $('#wcv-product-edit > .alert .inclusion').show();
            $('#wcv-product-edit > .alert .inclusion span').show();
          }
          if (!isValid.Duration) {
            $('#wcv-product-edit > .alert .duration').show();
            $('#wcv-product-edit > .alert .duration span').show();
          }
          if (!isValid.Pricing) {
            $('#wcv-product-edit > .alert .pricing').show();
            $('#wcv-product-edit > .alert .pricing span').show();
          }

          $('html, body').animate({
              scrollTop: $("#wcv-product-edit").offset().top
          }, 300);
        } else {
          this.form.submit();
        }
      });

      $('[data-hide="alert"]').click(function() {
        $(this).parent('.alert').hide();
      });

      $(document).on('click', '.gotoField', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        // console.log($(this).data('target'));

        if (!$(this).parent('li.active a').hasClass($(this).data('tab'))) {
          $('li a.' + $(this).data('tab'))[0].click();
        }

        if ($(this).data('action') == 'focus') {
          $($(this).data('target')).focus();
        } else if ($(this).data('action') == 'click') {
          $($(this).data('target')).click();
        }
      });

      // Offer inclusive accommodation checkbox
      inclusiveaccommodationCheck();
      $('#yes-accommodation').click(inclusiveaccommodationCheck);
      function inclusiveaccommodationCheck() {
        if($('#yes-accommodation').prop('checked')) {
          $('#if-inclusive-accommodation').show();
        } else {
          $('#if-inclusive-accommodation').hide();
        }
      }

      if ($('#if-inclusive-accommodation table tbody tr').length == 0) {
        $('#if-inclusive-accommodation table thead').hide();
      }

      // Add a new item in inclusive accommodation
      $('button.add-accommodation-item').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        var tr = '<tr>' +
          '<td>' +
            '<select class="form-control" name="yx_accommodation_day[]" placeholder="Day">' +
              '<option>1</option>' +
              '<option>2</option>' +
              '<option>3</option>' +
              '<option>4</option>' +
              '<option>5</option>' +
              '<option>6</option>' +
              '<option>7</option>' +
              '<option>8</option>' +
              '<option>9</option>' +
              '<option>10</option>' +
              '<option>11</option>' +
              '<option>12</option>' +
              '<option>13</option>' +
              '<option>14</option>' +
              '<option>15</option>' +
            '</select>' +
          '</td>' +
          '<td>' +
            '<select class="form-control" name="yx_accommodation_rating[]">' +
            '  <option>Hotel</option>' +
            '  <option>Apartment</option>' +
            '  <option>Vacation Rentals</option>' +
            '  <option>Guest House</option>' +
            '  <option>Others</option>' +
            '</select>' +
          '</td>' +
          '<td>' +
            '<select class="form-control" name="yx_accommodation_type[]">' +
            '  <option>5-stars</option>' +
            '  <option>4-stars</option>' +
            '  <option>3-stars</option>' +
            '  <option>2-stars</option>' +
            '  <option>1-stars</option>' +
            '  <option>Unrated</option>' +
            '</select>' +
          '</td>' +
          '<td><textarea class="form-control" name="yx_accommodation_description[]" placeholder="Enter details of the hotel if possible"></textarea></td>' +
          '<td style="vertical-align: middle; text-align: center;"><button type="button" class="btn btn-danger btn-xs remove-accommodation-item"><span class="glyphicon glyphicon-minus"></span></button></td>' +
        '</tr>';
        $('#if-inclusive-accommodation tbody').append(tr);
        $('#if-inclusive-accommodation thead').show();
      });

      // Delete an accommodation
      $(document).on('click', 'button.remove-accommodation-item', function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();

        // Ajax request to delete a highlight offer
        var product = $(this).attr('data-product');
        var thisRow = $(this).closest('tr');

        if (product) {
          var day = $(this).attr('data-accommodation-day');
          var type = $(this).attr('data-accommodation-type');
          var rating = $(this).attr('data-accommodation-rating');
          var description = $(this).attr('data-accommodation-description');
          var param = '?action=yx_delete_accommodation&product=' + product + '&day=' + day + '&type=' + type + '&rating=' + rating + '&description=' + description;

          $.get(ajaxurl + param, function(r) {
            if (r == 'ok') {
              thisRow.remove();
            }
          });
        }

        if (!product) {
          thisRow.remove();
        }

        if ($('#if-inclusive-accommodation tbody tr').length == 0) {
          $('#if-inclusive-accommodation thead').hide();
        }
      });

      // Ajax request to get languages options
      // $.getJSON(ajaxurl + '?action=yx_languages&product=' + yx_product, function(r) {
      //   yx_languages = $.map(r, function(el, id) { return Array(Array(id,el)); });
      // });

      // Add languages offered
      $('button.add-language-item').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();

        var nTr = $('#languages-offered tbody tr').length + 1;
        var tr = '<tr>' +
          '<td>' +
            '<select id="select-languages' + nTr + '" name="yx_language_name[]" style="width: 100%">';

        for (var i = 0; i < yx_languages.length; i++) {
          tr += '<option value="' + yx_languages[i][0] + '" data-index="' + i + '">' + yx_languages[i][1] + '</option>';
        }

        tr += '</select>' +
          '</td>' +
          '<td>' +
            '<input type="checkbox" name="yx_language_conversation[]" id="yx_languages_conversation' + nTr + '" class="chk-language-conversation" value="yes" /> ' +
            '<input type="checkbox" name="yx_language_conversation[]" id="yx_languages_conversation' + nTr + '" class="chk-language-conversation" value="no" style="display: none" checked /> ' +
            '<label for="yx_languages_conversation' + nTr + '" class="pad-right">Conversation</label>' +
            '<input type="checkbox" name="yx_language_listening[]" id="yx_languages_listening' + nTr + '" class="chk-language-listening" value="yes" /> ' +
            '<input type="checkbox" name="yx_language_listening[]" id="yx_languages_listening' + nTr + '" class="chk-language-listening" value="no" style="display: none;" checked /> ' +
            '<label for="yx_languages_listening' + nTr + '" class="pad-right">Audio (Listening)</label>' +
            '<input type="checkbox" name="yx_language_written[]" id="yx_languages_written' + nTr + '" class="chk-language-written" value="yes" /> ' +
            '<input type="checkbox" name="yx_language_written[]" id="yx_languages_written' + nTr + '" class="chk-language-written" value="no" style="display: none;" checked /> ' +
            '<label for="yx_languages_written' + nTr + '" class="pad-right">Written</label>' +
          '</td>' +
          '<td style="vertical-align: middle; text-align: center;"><button type="button" class="btn btn-danger btn-xs remove-language-item"><span class="glyphicon glyphicon-minus"></span></button></td>' +
        '</tr>';

        // if (nTr > 1) {
        //   alert($(''))
        // }
        $('#languages-offered tbody').append(tr);
        $('#languages-offered thead').show();
        $('#languages-offered tbody tr').last().find('select').select2();
      });

      // Use select2 as well for languages that has been saved (in edit offer)
      $.each($('.old-selected-languages'), function(key, val) {
        $(val).select2();
      });

      // Hide languages offered table header if there is no data row
      if ($('#languages-offered table tbody tr').length == 0) {
        $('#languages-offered table thead').hide();
      }

      // The default value of whether the language type is conversation/listening/written is no, NO language type.
      // Each language name have two conversation checkboxes (one for yes:support conversation; and another for no:doesn't support conversation in that language)
      // "NO" checkboxes are hidden and by default they are checked
      $(document).on('click', '.chk-language-conversation, .chk-language-listening, .chk-language-written', function(e) {
        var checked = $(this).prop('checked');
        $(this).next().prop('checked', !checked);
        var nextChecked = $(this).next().prop('checked');
      });

      // Delete an offered language
      $(document).on('click', 'button.remove-language-item', function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        var thisRow = $(this).closest('tr');
        thisRow.remove();

        if ($('#languages-offered tbody tr').length == 0) {
          $('#languages-offered thead').hide();
        }
      });

      // Pickup and meeting point in inclusion of a product
      if ($('#yes-pickup').prop('checked')) {
        showPickupOptions();
      } else if($('#no-pickup').prop('checked')) {
        showMeetingPointOptions();
      }

      $('#yes-pickup').click(function() {
        if ($(this).prop('checked')) {
          showPickupOptions();
        }
      });

      $('#no-pickup').click(function() {
        if ($(this).prop('checked')) {
          showMeetingPointOptions();

          // Initialize map
          if (yx_product > 0)
            yx_map_meeting_point_initialize(true);
          else
            yx_map_meeting_point_initialize(false);
          var center = meetingMap.getCenter();
          google.maps.event.trigger(meetingMap, "resize");
          meetingMap.setCenter(center);

          // Use the same country, province, city name from product location in product data
          var provinceName = $('#wcv_custom_product_province option[value="' + $('#wcv_custom_product_province').val() + '"]').text();

          $('#wcv_custom_product_meeting_country').val(countryName);
          $('#wcv_custom_product_meeting_province').val(provinceName);
          $('#wcv_custom_product_meeting_city').val(cityName);
        }
      });

      function showPickupOptions() {
        $('#if-yes-pickup').show();
        $('#if-no-pickup').hide();
      }

      function showMeetingPointOptions() {
        $('#if-yes-pickup').hide();
        $('#if-no-pickup').show();
      }

      // Timepicker for pickup time
      $('#wcv_custom_product_pickup_time').timepicker({
        minuteStep: 1,
        template: false,
        showMeridian: false
      });

      // To display map content after location tab is clicked
      $('.yx-product-location').click(function() {
        setTimeout(function () {
          var center = marker.getPosition();
          google.maps.event.trigger(map, "resize");
          map.setCenter(center);
        }, 1000);
      });

      // Use the same country name from product location in product data
      var countryName = $('#wcv_custom_product_country option[selected]').text();
      if (yx_product == 0) {
        $('#wcv_custom_product_country').focusout(function() {
          $('#wcv_custom_product_meeting_country').val(countryName);
        });
      } else if ($('#no-pickup').prop('checked') && $('#wcv_custom_product_meeting_country').val() == "") {
        $('#wcv_custom_product_meeting_country').val(countryName);
      }

      // Use the same province name from product location in product data
      var provinceName = $('#wcv_custom_product_province option[value="' + $('#wcv_custom_product_province').val() + '"]').text();
      if (yx_product == 0) {
        if (provinceName == '') {
          provinceName = $('#wcv_custom_product_province option')[0].innerHTML;
        }

        $('#wcv_custom_product_meeting_province').val(provinceName);
        $('#wcv_custom_product_province').focusout(function() {
          $('#wcv_custom_product_meeting_province').val(provinceName);
        });
      } else if ($('#no-pickup').prop('checked') && $('#wcv_custom_product_meeting_province').val() == "") {
        $('#wcv_custom_product_meeting_province').val(provinceName);
      }

      // Use the same province name from product location in product data
      var cityName = $('#wcv_custom_product_city_input').val();
      if (yx_product == 0) {
        $('#wcv_custom_product_city_input').focusout(function() {
          $('#wcv_custom_product_meeting_city').val(cityName);
        });
      } else if ($('#no-pickup').prop('checked') && $('#wcv_custom_product_meeting_city').val() == "") {
        $('#wcv_custom_product_meeting_city').val(cityName);
      }

      /**
       * Showing subcategory select box only after a parent category is chosen
       * Only shows subcategories directly under a parent
       */
      var yxProductCategory = $('#yx_product_category');
      yx_shop_fetch_subcategory();

      yxProductCategory.on('change', function() {
        // Process to get subcategory only after a parent category is selected
        if(yxProductCategory.val().length > 0) {
          yx_shop_fetch_subcategory();
        } else {
          $('.product-subcategory').hide();
        }

        // Remove all current selected subcategories
        // after changing parent category
        $('.sel_product_subcat ul li.select2-search-choice').remove();

        // Disable the subcategory select field and display preloader gif animation
        $('.sel_product_subcat select').prop('disabled', 'disabled');
        $('.load-subcategory').show();
      });

      function yx_shop_fetch_subcategory() {
        // Get id parent category
        var parent = yxProductCategory.val();

        // Parameter for ajax request
        var param = '?action=yx_subcategory_list&parent=' + parent;
        $('.sel_product_subcat select').html('');
        $.getJSON(ajaxurl + param, function(r) {
          var subOptions = '';

          // Add all options available in a parent category
          for (var sub in r) {
            subOptions += '<option class="level-0" value="' + sub + '">' + r[sub] + '</option>';
          }
          // Replace oll other previous subcategories
          $('.sel_product_subcat select').html(subOptions);

          if (yx_product > 0) {
            $.each($('.sel_product_subcat ul li.select2-search-choice'), function() {
              $('.sel_product_subcat select option:contains("' + $(this).text().trim() + '")').prop('selected', true);
            });
          }

          // Hide preloader gif animation and enable back subcategory select field
          $('.load-subcategory').hide();
          $('.sel_product_subcat select').prop('disabled', false);

          // Display the subcategory select box
          // $('.product-subcategory').show();

          // $.each($('.sel_product_subcat ul li.select2-search-choice'), function(){
          //   $(".sel_product_subcat option:contains('" + $(this).text().trim() + "')").hide();
          // });
        });
      }

      /**
       * Ajax request for province/states options based on selected country name
       */
      var yxProductCountry = $('#wcv_custom_product_country');

      yxProductCountry.on('change', function() {
        yx_shop_fetch_province();
      });

      $('#wcv_custom_product_province').on('change', function() {
        yx_map_update_location(false, true);
        var provinceName = $('#wcv_custom_product_province option[value="' + $('#wcv_custom_product_province').val() + '"]').text();
        $('#wcv_custom_product_meeting_province').val(provinceName);
      });

      function yx_shop_fetch_province() {
        // Get id parent category
        var country = yxProductCountry.val();

        // Parameter for ajax request
        var param = '?action=yx_province_list&country=' + country;
        $.getJSON(ajaxurl + param, function(r) {
          var subOptions = '';

          // Store all province/states in a country into a variable
          for (var sub in r) {
            subOptions += '<option class="level-0" value="' + sub + '">' + r[sub] + '</option>';
          }
          // Replace oll other previous subcategories
          var selectProv = $('select#wcv_custom_product_province');
          selectProv.html(subOptions);

          var provOpt = $('#wcv_custom_product_province option');
          if ( provOpt.exists() ) {
            $('#s2id_wcv_custom_product_province .select2-chosen').text(provOpt[0].text);
          } else {
            $('#s2id_wcv_custom_product_province .select2-chosen').text('No Available Options');
          }

          yx_map_update_location(false, true);
        });
      }

      // When clicking on add offer highlight button
      $('.btn-add-highlight').click(function() {
        if($('.cur-highlight').val().trim() != '') {
          $('#highlight-list').append('<li>' + $('.cur-highlight').val() + ' ' + '<span class="delete glyphicon glyphicon-remove"></span>' + '</li>');
          $('.highlight').removeClass('cur-highlight');
          $('.highlight').hide();
          $('.highlight').attr('name', 'highlight[]');
          $('.form-highlight').append('<input type="text" class="form-control highlight cur-highlight" id="a-highlight">');
        }
        $('.cur-highlight').get(0).focus();
      });

      // Event when user pressing enter key on the textbox for adding a highlight offer
      $('.cur-highlight').keydown(function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
        }
      }).end().keyup(function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();

          if($('.cur-highlight').val().trim() != '') {
            $('#highlight-list').append('<li>' + $('.cur-highlight').val() + ' ' + '<span class="delete glyphicon glyphicon-remove"></span>' + '</li>');
            $('.highlight').removeClass('cur-highlight');
            $('.highlight').hide();
            $('.highlight').attr('name', 'highlight[]');
            $('.form-highlight').append('<input type="text" class="form-control highlight cur-highlight" id="a-highlight">');
          }
          $('.cur-highlight').focus();
        }
      }).end().keypress(function(e) {
        if (e.keyCode == 13) {
          e.preventDefault();
        }
      });

      // Deleting a highlight offer
      $(document).on('click', '#highlight-list .delete', function() {
        // Ajax request to delete a highlight offer
        var product = $('#highlight-list').attr('data-product');
        var highlight = $(this).attr('data-highlight');
        var param = '?action=yx_delete_highlight&product=' + product + '&highlight=' + highlight;
        var aHighlight = $(this).closest('li');

        if (highlight) {
          $.get(ajaxurl + param, function(r) {
            if (r == 'ok') {
              aHighlight.fadeOut(300);
            }
          });
        } else {
          aHighlight.fadeOut(300);
        }
      });

      // Duration
      DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      $('#wcv_custom_product_dur_hours_input, #wcv_custom_product_dur_days_input').keyup(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      });

      // itinerary
      chk_itinerary_table();
      $('#create-itinerary').click(function() {
        chk_itinerary_table();
      });

      function chk_itinerary_table() {
        if ($('#create-itinerary')[0].checked) {
          $('.table-itinerary').show();

          if (!$('.table-itinerary select option').exists()) {
            var opts = '';
            var ndays = Number.parseInt($('[name="wcv_custom_product_dur_days_input"]').val());

            for (var i = 1; i <= ndays; i++) {
              opts += '<option value="' + i + '">' + i + '</option>\n';
            }
            $('.table-itinerary select').append(opts);
          }
        } else {
          $('.table-itinerary').hide();
        }
      }

      // Hide thead if there is no row in tbody (in itinerary table)
      if ($('.table-itinerary tbody tr').length == 0) {
        $('.table-itinerary table thead').hide();
      }

      // Add a new itinerary entry
      $(document).on('click', 'button.add-itinerary-item', function() {
        $('.table-itinerary tbody').append(
        '<tr>' +
          '<td><select class="form-control" name="yx_itinerary_day[]" placeholder="Day"></select></td>' +
          '<td><input type="text" class="form-control" name="yx_itinerary_time[]" placeholder="Time"></td>' +
          '<td><textarea class="form-control" name="yx_itinerary_activities[]" placeholder="Activities"></textarea>' +
          '<td style="vertical-align: middle; text-align: center;"><button type="button" class="btn btn-danger btn-xs remove-itinerary-item"><span class="glyphicon glyphicon-minus"></span></button></td>' +
        '</tr>');

        var yx_sel = $('.table-itinerary select');
        $.each(yx_sel, function() {
          var opt = this.getElementsByTagName('option');
          if (opt.length == 0) {
            var opts = '';
            var ndays = Number.parseInt($('[name="wcv_custom_product_dur_days_input"]').val());

            for (var i = 1; i <= ndays; i++) {
              opts += '<option value="' + i + '">' + i + '</option>\n';
            }
            $(this).append(opts);
          }
        });

        // After adding an item into itinerary, tbody now has rows, so display thead
        $('.table-itinerary table thead').show();
      });

      // When "-" button is clicked to remove an itinerary item
      $(document).on('click', 'button.remove-itinerary-item', function() {
        $(this).closest('tr').remove();

        // Hide thead if there is no row in tbody (in itinerary table)
        if ($('.table-itinerary tbody tr').length == 0) {
          $('.table-itinerary table thead').hide();
        }
      });

      // Special license to offer the experience
      checkSpecialLicense();
      function checkSpecialLicense() {
        if ($('#special_license').prop('checked')) {
          $('#if-have-special-license').show();
        } else {
          $('#if-have-special-license').hide();
        }
      }
      $('#special_license').click(function() {
        checkSpecialLicense();
      });
    });

    /////////////////////////////////////////////////////////////////
    // AVAILABILITY AND PRICING
    //

    $(function() {
      // Hide default label for select a unit type
      $('label[for="yx_product_unit_type"]').hide();

      // Whether to choose unit type from the list or write a custom unit type
      $('#opt_product_unit_type_from_list, #opt_product_unit_type_custom').click(checkUnitType);
      checkUnitType();
      function checkUnitType() {
        if ($('#opt_product_unit_type_from_list').prop('checked')) {
          $('#yx_product_unit_type').prop('disabled', false);
          $('#yx_product_unit_type_custom').prop('disabled', true);
        } else if ($('#opt_product_unit_type_custom').prop('checked')) {
          $('#yx_product_unit_type').prop('disabled', true);
          $('#yx_product_unit_type_custom').prop('disabled', false);
        }
      }
      $('#s2id_yx_product_unit_type').click(function() {
        $('#opt_product_unit_type_from_list').prop('checked', true);
        $('#opt_product_unit_type_custom').prop('checked', false);
        checkUnitType();
      });
      $('#yx_product_unit_type_custom').click(function() {
        $('#opt_product_unit_type_from_list').prop('checked', false);
        $('#opt_product_unit_type_custom').prop('checked', true);
        checkUnitType();
      });

      // Apply checked available days into calendar
      $(document).on('click', '#btnApplyAvailableDays', function() {
        yx_display_loading = false;
        var days = '';
        for (var i = 0; i < 7; i++) {
          days += $('#DOPBSP-settings-days-available-' + i).prop('checked');
          if (i < 6) {
            days += ',';
          }
        }

        var calendar = $('#calendar_id').val();
        var param = '?action=apply_available_days&days=' + days + '&calendar=' + calendar;
        $.get(ajaxurl + param, function(r) {
          DOPBSPBackEndCalendar.display(calendar);
        });
      });

      // Pricing type radio buttons
      var pricing_type = document.getElementById('person-pricing').form.yx_pricing_type.value;
      pricingTypeCheck();
      $('#person-pricing').click(function() {
        pricing_type = document.getElementById('person-pricing').form.yx_pricing_type.value;
        if (pricing_type == 'group')
          pricingTypeCheck();
      });
      $('#group-pricing').click(function() {
        pricingTypeCheck();
      });
      function pricingTypeCheck() {
        if($('#person-pricing').prop('checked')) {
          $('.if-per-person').show();
          $('.if-per-group').hide();
        } else if ($('#group-pricing').prop('checked')) {
          $('.if-per-person').hide();
          $('.if-per-group').show();
        }
      }

      $('.yx-product-pricing').click(function() {
        if (!$('#DOPBSP-col-column2').hasClass('dopbsp-calendar')) {
          // NOTE: yx_product is a global variable that is declared in product-edit.php
          DOPBSPBackEndCalendar.yxDisplayCalendar(yx_product);
        }
      });

      // Private service field
      privateServiceCheck();
      $('#yx_is_private_service').click(function(e) {
        privateServiceCheck();
      });
      function privateServiceCheck() {
        if($('#yx_is_private_service').prop('checked')) {
          $('.if-private-service').show();
        } else {
          $('.if-private-service').hide();
        }
      }

      // Push the value from range min_n_people to max_n_people into an array yx_n_people (declared at the top)
      // The index of array is started from 0
      // Commented, there is no min_n_people anymore. It is divided into min n child and min n adult
      var yx_min_n_people = parseInt($('#min_n_child').val()) + parseInt($('#min_n_adult').val());
      var yx_max_n_people = parseInt($('#max_n_child').val()) + parseInt($('#max_n_adult').val());
      if (yx_min_n_people > 1) {
        for (var i = 0, n = yx_min_n_people; n <= yx_max_n_people; i++, n++) { yx_n_people[i] = n; }
      }

      // $('#min_n_people').unbind('keyup');
      // $('#min_n_people').bind('keyup', function() {
      //   DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      //
      //   var min = $('#min_n_people');
      //   var max = $('#max_n_people');
      //   if (min.val() <= 0) {
      //     min.val('');
      //   }
      // });
      // $('#min_n_people').blur(function() {
      //   DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      //
      //   var min = $('#min_n_people');
      //   var max = $('#max_n_people');
      //     if ((max.val() != '' && parseInt(min.val()) > parseInt(max.val())) || (parseInt(min.val()) <= 0)) {
      //     min.val('');
      //   }
      //
      //   if (min.val().trim() != '' && max.val().trim() != '' && $('#DOPBSP-price').val().trim() != '') {
      //     var options = '';
      //     yx_n_people = Array();
      //     for (var i = parseInt(min.val()); i <= parseInt(max.val()); i++) {
      //       yx_n_people.push(i);
      //       options += '<option value="' + i + '">' + i + ' people</option>';
      //     }
      //     $('#yx_discount_n_people').html(options);
      //     $('#yx_discount_n_people, #yx_button_set_price').prop('disabled', false);
      //   } else {
      //     $('#yx_discount_n_people, #yx_button_set_price').prop('disabled', true);
      //   }
      // });
      //
      // $('#max_n_people').unbind('keyup');
      // $('#max_n_people').bind('keyup', function() {
      //   DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      //
      //   var min = $('#min_n_people');
      //   var max = $('#max_n_people');
      //   if (max.val() <= 0) {
      //     max.val('');
      //   }
      // });
      // $('#max_n_people').blur(function() {
      //   DOPPrototypes.cleanInput($(this), '0123456789', '', '');
      //
      //   var min = $('#min_n_people');
      //   var max = $('#max_n_people');
      //   if ((min.val() != '' && parseInt(min.val()) > parseInt(max.val())) || (parseInt(max.val()) <= 0)) {
      //     max.val('');
      //   }
      //
      //   if (min.val().trim() != '' && max.val().trim() != '' && $('#DOPBSP-price').val().trim() != '') {
      //     var options = '';
      //     yx_n_people = Array();
      //     for (var i = parseInt(min.val()); i <= parseInt(max.val()); i++) {
      //       yx_n_people.push(i);
      //       options += '<option value="' + i + '">' + i + ' people</option>';
      //     }
      //     $('#yx_discount_n_people').html(options);
      //     $('#yx_discount_n_people, #yx_button_set_price').prop('disabled', false);
      //   } else {
      //     $('#yx_discount_n_people, #yx_button_set_price').prop('disabled', true);
      //   }
      // });

      $('#yx-people input[type="text"]').on('keyup', function() {
        if (!$(this).hasClass('select2-input') && $(this).attr('id') != 'yx_product_unit_type_custom') {
          DOPPrototypes.cleanInput($(this), '0123456789', '', '');
        }
      });

      // Minimum number of child must be less than or equal to maximum number of child
      $('#min_n_child').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_n_child');
        var max = $('#max_n_child');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          min.val('');
        }

        yxSetNPeopleArray();
      });

      $('#min_n_child, #min_n_adult, #max_n_child, #max_n_adult, #max_unit_type_per_booking').on('keyup', function() {
        yxSetNPeopleArray();
      });

      // Maximum number of child must be less than or equal to maximum number of child
      $('#max_n_child').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_n_child');
        var max = $('#max_n_child');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          max.val('');
        }

        yxSetNPeopleArray();
      });

      // Minimum number of adult must be less than or equal to maximum number of child
      $('#min_n_adult').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_n_adult');
        var max = $('#max_n_adult');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          min.val('');
        }

        yxSetNPeopleArray();
      });

      // Maximum number of adult must be less than or equal to maximum number of child
      $('#max_n_adult').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_n_adult');
        var max = $('#max_n_adult');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          max.val('');
        }

        yxSetNPeopleArray();
      });

      // Minimum child age <= maximum child age
      $('#min_child_age').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_child_age');
        var max = $('#max_child_age');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          min.val('');
        }
      });

      // Maximum child age >= minimum child age
      $('#max_child_age').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_child_age');
        var max = $('#max_child_age');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          max.val('');
        }

        if (max.val() != '') {
          // Minimum adult age = (maximum child age + 1)
          $('#min_adult_age').val(parseInt(max.val()) + 1);
        }
      });

      // Minimum adult age <= maximum adult age
      $('#min_adult_age').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_adult_age');
        var max = $('#max_adult_age');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          min.val('');
        }

        if (min.val() != '') {
          // Maximum child age = (minimum adult age - 1)
          $('#max_child_age').val(parseInt(min.val()) - 1);
        }
      });

      // Maximum adult age >= minimum adult age
      $('#max_adult_age').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        var min = $('#min_adult_age');
        var max = $('#max_adult_age');
        if ( (min.val() != '' && max.val() != '' && parseInt(min.val()) > parseInt(max.val()) )) {
          max.val('');
        }
      });

      $('#yx_cancelation_policy').blur(function() {
        var min = $(this);
        var max = $('#yx_max_booking_hours');
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');
        if (min.val() != '' && max.val() != '' && parseInt(min.val()) >= parseInt(max.val())) {
          min.val('');
        }
      });

      $('#yx_max_booking_hours').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');
        var min = $('#yx_cancelation_policy');
        var max = $(this);
        if (min.val() != '' && max.val() != '' && parseInt(min.val()) >= parseInt(max.val())) {
          max.val('');
        }
      });

      // Maximum number of unit type per booking
      $('#max_unit_type_per_booking').blur(function() {
        DOPPrototypes.cleanInput($(this), '0123456789', '', '');

        yxSetNPeopleArray();
      });
    });
  });

  yxRoute.add('^.*dashboard/rating/$', function() {
    setRatingColumnView();
    function setRatingColumnView() {
      if ($('#merchant-reviews').css('display') == 'block' && $('#merchant-ratings').hasClass('col-sm-12')) {
        $('#merchant-ratings').removeClass('col-sm-12').addClass('col-sm-8');
      } else if ($('#merchant-ratings').hasClass('col-sm-8')) {
        $('#merchant-ratings').removeClass('col-sm-8').addClass('col-sm-12');
      }
    }

    $('.btn-reviews').click(function() {
      if ($(this).hasClass('view-reviews')) {
        $('#merchant-reviews').show();
        setRatingColumnView();

        $(this).text('Hide Reviews');
        $(this).toggleClass('view-reviews');
      } else {
        $('#merchant-reviews').hide();
        setRatingColumnView();

        $(this).text('View Reviews');
        $(this).toggleClass('view-reviews');
      }
    });

    $('#merchant-reviews .close').click(function() {
        $('#merchant-reviews').hide();
        setRatingColumnView();

        $('.btn-reviews').text('View Reviews');
        $('.btn-reviews').toggleClass('view-reviews');
    });
  });

  // Only executed on merchant settings page
  yxRoute.add('/dashboard', function() {
    function isNewMerchant() {
      return ($('#_wcv_vendor_application_id').length > 0);
    }

    function validateBusinessTab() {
      var valid = true;

      // Validate business name
      if ($('#_wcv_store_name').val().trim() == '') {
        valid = false;
      }

      return valid;
    }

    $(function() {
      if ($('#_wcv_vendor_application_id, #_wcv-save_store_settings').length > 0) {
        if ($('#_wcv_store_state').val().trim() == '') {
          // Check whether geolocation is supported
          if (navigator.geolocation) {
            var startPos;
            var geoOptions = {
              maximumAge: 5 * 60 * 1000,
              timeout: 10 * 1000
            };

            var geoSuccess = function(position) {
              startPos = position;
              console.log('latitude: ' + startPos.coords.latitude);
              console.log('longitude: ' + startPos.coords.longitude);

              var lat = startPos.coords.latitude;
              var lng = startPos.coords.longitude;
              var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&language=id&result_type=administrative_area_level_1&key=AIzaSyD49vhXLJMb4h03l5jwQpPiVZpOt9pmxqU&sensor=false';
              $.getJSON(url, function(r) {
                if (r.status == 'OK') {
                  // See JSON response through Network tab in developer tools for details
                  var provinceName = getProvinceName(r.results[0].address_components);
                  var provinceCode = getProvinceCode(provinceName);
                  console.log('Province name: ' + provinceName + ', Province code: ' + provinceCode);

                  $('#_wcv_store_state').val(provinceName);
                }
              });
            };
            var geoError = function(error) {
              // 0 => unknown error, 1 => permission denied, 2 => position unavailable (error response from location provider), 3 => timed out
              console.log('Error occured. Error code: ' + error.code);
            };

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
          } else {
            console.log('Geolocation is not supported for this Browser/OS version yet.');
          }
        }

        isIndividualMerchant();
        function isIndividualMerchant() {
          if ($('#yx_merchant_bus_cat_individual').prop('checked')) {
            $('#if-individual-merchant').show();
            $('#if-business-merchant').hide();
          } else {
            $('#if-individual-merchant').hide();
            $('#if-business-merchant').show();
          }
        }

        $('#yx_merchant_bus_cat_individual, #yx_merchant_bus_cat_company').click(function() {
          isIndividualMerchant();
        });

        $('.tabs-tab.store, .tabs-tab.payment, .tabs-tab.branding').click(function()  {
          if ($(this).hasClass('store'))
            $('#prev_button').prop('disabled', true);
          else
            $('#prev_button').prop('disabled', false);

          $('#next_button').prop('disabled', false);
        });

        $('.tabs-tab.social').click(function() {
          $('#next_button').prop('disabled', true);
          $('#prev_button').prop('disabled', false);
        });

        $('#save_button').click(function() {
          validateBusinessTab();
        });

        $('#prev_button').click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          $('.tabs-nav li.active').prev().find('a')[0].click();

          $('html, body').animate({
              scrollTop: $(".wcvendors-pro-dashboard-wrapper").offset().top
          }, 300);
        });

        $('#next_button').click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          var isValid = validateBusinessTab();

          if (isValid) {
            $('.tabs-nav li.active').next().find('a')[0].click();

            $('html, body').animate({
                scrollTop: $(".wcvendors-pro-dashboard-wrapper").offset().top
            }, 300);
          }
        });
      }
    });
  });

  // View business page
  yxRoute.add('/merchant/', function() {
    function adjustStoreHeaderMargin() {
      var navbarHeight = $('.navbar').css('height');
      $('.wcv-header-container').css({'padding-top': navbarHeight});
    }

    // Re-Set the margin of wcv-header-container when the window is resized
    $(window).resize(adjustStoreHeaderMargin);
    // Set the margin-top of wcv-header-container according to the height of fixed header nav
    $(document).ready(function() {
      adjustStoreHeaderMargin();
    });

    $(function() {
      // Filter category checkboxes
      $('#filter-offer-category .panel-heading input[type="checkbox"]').click(function() {
        $(this).closest('.panel-heading').next('.panel-body').find('input[type="checkbox"]').prop('checked', $(this).prop('checked'));
      });

      // Filter category buttons
      $('#button-filter-category').click(function() {
        if ($('#form-filter-category').css('display') == 'none') {
          $('#form-filter-category, #cancel-filter-category').show();
          $(this).text('Apply Filter');
        } else {
          $('#form-filter-category, #cancel-filter-category').hide();
          $(this).text('Filter Category');
        }
      });

      $('#cancel-filter-category').click(function() {
        $('#form-filter-category, #cancel-filter-category').hide();
        $('#button-filter-category').text('Filter Category');
      });

      $('.link-more-sub').click(function(e) {
        e.preventDefault();
        $('.link-less-sub[data-target="' + $(this).data('target') + '"]').show();
        $(this).hide();
        $('.more-sub-' + $(this).data('target')).show();
      });

      $('.link-less-sub').click(function(e) {
        e.preventDefault();
        $('.link-more-sub[data-target="' + $(this).data('target') + '"]').show();
        $(this).hide();
        $('.more-sub-' + $(this).data('target')).hide();
      });
    });
  });

  yxRoute.run();
})(jQuery);

function yx_shop_edit_user_profile(){
  // alert("success");

  if((document.getElementById('account_first_name').value == "") && (document.getElementById('account_last_name').value == "")) {
    document.getElementById('account_first_name').disabled = false;
    document.getElementById('account_last_name').disabled = false;
  }
    document.getElementById('yx_account_title').disabled = false;
    document.getElementById('account_email').disabled = false;
    document.getElementById('date_of_birth').disabled = false;

    document.getElementById('country_of_residence').disabled = false;
    document.getElementById('province').disabled = false;
    document.getElementById('about_me').disabled = false;

    document.getElementById('password_current').disabled = false;
    document.getElementById('password_1').disabled = false;
    document.getElementById('password_2').disabled = false;

    document.getElementById('facebook_account').disabled = false;
    document.getElementById('twitter_account').disabled = false;
    document.getElementById('gplus_account').disabled = false;
    document.getElementById('instagram_account').disabled = false;

    document.getElementById('yx_profile_picture').disabled = false;
}

function yx_shop_point_redeem(){
  var redeem =  document.getElementById('value_of_points_of_redeem').value;

  $points.value = redeem;
}

function yx_show_instant_booking(){
  window.location.href = "http://localhost/wordpress/cart/";
}

function cities_clicked(){
  window.location.href = "http://localhost/wordpress/explore/";
}

function home_clicked(){
  window.location.href = "http://localhost/wordpress/";
}


function merchant_dashboard_page(){
  window.location.href = "http://localhost/wordpress/dashboard/";
}

function view_review_page(){
  window.location.href = "http://localhost/wordpress/shop/dining/testing/";
}

function view_merhant_profile_page(){
  window.location.href = "http://localhost/wordpress/merchant-profile-page/";
}

function go_to_my_account(){
  window.location.href = "http://localhost/wordpress/my-account/";
}

function sign_up_already(){
  $('.js-modal-close').click(function() {
    $('.yx-modal-box, .modal-overlay').fadeOut(500, function() {
      $('.modal-overlay').fadeOut(300); // Hide it first

      $('.yx-modal-box').css({ // Then, make the top property back to -100%
        top: '-100%'
      });

      $('#yx-signup-modal header > h2').text('Join Yo Xplor');
      $('#apply_for_vendor').prop('checked', false);
    });

    // Back to focus to any first textbox on the page
    $('input[type="text"]')[0].focus();
  });
}
