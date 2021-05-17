var current = 0;
var curr_activ = 0;

var img1 = 'https://splat.com.ua/wp-content/uploads/2017/10/uslugi7.jpg';
var text1 = "<h2 class='text_under'>ВЫСОКОКЛАССНЫЕ СПЕЦИАЛИСТЫ<br><br>Молодые и амбициозные<br><br>Большая часть нашего медперсонала - молодые врачи, с самыми свежими и актуальными знаниями в своей области</h2>";
var img2 = 'https://p0.zoon.ru/preview/_sSgHbBI437TVFhVVoexJw/1180x520x85/3/8/a/original_5220eb3fa0f3020e59000c63_5c8fcadb18ef7.jpg';
var text2 = "<h2 class='text_under'>ЛУЧШЕЕ СОВРЕМЕННОЕ ОБОРУДОВАНИЕ<br><br>Не хуже, чем у Запада<br><br>В нашей стоматологической клинике установлено самое лучшее отечественное оборудование, соответствующее всем стандартам качества</h2>";
var img3 = 'https://avatars.mds.yandex.net/get-zen_doc/249065/pub_5e3130b6f1e39f246476c4fd_5e3131017870732c40557963/scale_1200';
var text3 = "<h2 class='text_under'>ДЕТСКОЕ ОТДЕЛЕНИЕ<br><br>Дети любят ходить к нам!<br><br>В нашей клинике установлена игровая зона с телевизором, раскрасками и сладостями, чтобы ваше чадо могло расслабиться перед походом в кабинет доктора. А после приема каждого ребенка ждет вкусный подарок!</h2>";
var img4 = 'https://4geo.ru/images/personal-pages-share/181660672/img1968540433_12733940305650041.jpg';
var text4 = "<h2 class='text_under'>ДОСТУПНЫЕ ЦЕНЫ<br><br>Доступна кредитная система и рассрочка!<br><br>В нашей клинике каждый клиент сможет позволить себе здоровую и красивую улыбку!</h2>"
var text_activ1 = "Выберите вид искусства";
var text_activ2 = "Выберите развлечение";
var text_activ3 = "Выберите экскурсию";
//var text_activ4 = "";

let arr_img = [img1, img2, img3, img4];       //массив фотографий
let arr_text = [text1, text2, text3, text4];   //массив текстов
let activ = [text_activ1, text_activ2, text_activ3];  //массив мероприятий
let arts = ["Музеи", "Музыка", "Архитектура", "Живопись", "Театры", "Достопримечательности"];
let relax = ["Дайвинг", "Ночные клубы", "Подводная охота"];

/*Смена фото при нажатии кнопку со стрлекой направленная в правую сторону*/
function frw()
{

  if(current == arr_img.length-1)
  {
     current = 0;
     document.getElementById('text').innerHTML = arr_text[current];
     image.src = arr_img[current];
  }
  else
  {
    document.getElementsByTagName('h2')[0].innerHTML = '';
    current++;
    document.getElementById('text').innerHTML = arr_text[current];
    image.src = arr_img[current];
  }
}
/*----------------------------------------------------------------------*/

/*Смена фото при нажатии кнопку со стрлекой направленная в левую сторону*/
function bck()
{
   current--;
   if(current == -1)
   {
    document.getElementsByTagName('h2')[0].innerHTML = '';
    current = arr_img.length-1;
   }
   document.getElementById('text').innerHTML = arr_text[current];
   image.src = arr_img[current];
}
/*----------------------------------------------------------------------*/

/*---------Проверка комбинаций символов при вводе пароля----------------*/
$("input[type='password']").keyup(function() {
var password_1 = $("input[name='client-password_1']").val();
var password_2 = $("input[name='client-password_2']").val();
if (password_1 != password_2 && password_1 != "" && password_2 != "") {
if (!$("div").is(".password_2 div:nth-child(3)")) {
$(".password_2")
.append('<div>Пароли не совпадают</div>');
}
else {
var text = $(".password_2 div:nth-child(3)").text();
if (text == "") {
$(".password_2 div:nth-child(3)")
.text('Пароли не совпадают');
}
}
$("input[name='client-password_2']")
.css("background", "#ffcab2");
}
else {
$(".password_2 div:nth-child(3)")
.empty();
$("input[name='client-password_2']")
.css("background", "#fdfadc");
}
});
/*----------------------------------------------------------------------*/
