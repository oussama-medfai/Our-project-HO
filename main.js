var users=[];
function creatUser(email,user,pass){
	return{
		user:user,
		email:email,
		pass:pass
	}
}
users.push(creatUser('oussama@rbk.tn','oussama','oussama'))
users.push(creatUser('hiba@rbk.tn','hiba','hiba'))
users.push(creatUser('user@rbk.tn','user','user'))
users.push(creatUser('invit@rbk.tn','invit','invit'))



function creatArticle() {
	return{
		categorie:'',
		id:"",
		name:'',
		brand:'',
		url:"",
		disciption:"",
		price:undefined,
		addArticl:addArticl,
			};
	
}
var addArticl=function(){
	this.categorie=arguments[0];
	this.id=arguments[1];
	this.name=arguments[2];
	this.brand=arguments[3];
	this.url=arguments[4];
	this.disciption=arguments[5];
	this.price=arguments[6];
}
	var categorie=[];
	categorie.push('Electronics','acessories','computer','entertainement','Kitchen','Games','Fashion','Parfum');
	var categorieUrl=[];
	categorieUrl.push('./img/entertainement/HP/1.jpg','./img/acessories/cars/1.jpg','./img/computer/pc portable/1.jpg','./img/entertainement/TV smart/1.jpg','./img/Kitchen/robot/1.jpg','./img/jeux/games/1.jpg','./img/Fashion/shoes/1.jpg','./img/Fashion/parfum/1.jpg')

	var articles=[];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var article=creatArticle()
	article.addArticl('w','1','cars',' ','./img/acessories/cars/1.jpg','Rideaux pare-soleil avec Ventouse',9);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','2','cars',' ','./img/acessories/cars/2.jpg','Siège de Voiture Correcteur de Posture Pour le Dos',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','3','cars',' ','./img/acessories/cars/3.jpg','Pare Soleil Avant de Voiture - Flamant rose',12);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','4','cars',' ','./img/acessories/cars/4.jpg','Couvre volant cuir',32);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','5','cars',' ','./img/acessories/cars/5.jpg','cendrier avec lumiere LED bleu',20);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','6','cars',' ','./img/acessories/cars/6.jpg','Tasse de voyage chauffée - en acier inoxydable',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','7','cars',' ','./img/acessories/cars/7.jpg','Super Clean Gel Magique visqueux De Nettoyage Poussière Intérieur Marque: Super Clean | Produits similaires par Super Clean',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','8','cars',' ','./img/acessories/cars/8.jpg','Housse Protection Extérieur 4 x 4 - Taille LC',103);
	articles.push(article);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var article=creatArticle()
	article.addArticl('computer','9','pc portable','Vega','./img/computer/pc portable/1.jpg','Vega Book Plus - 4Go - 64Go - Silver - Garantie 1 Ans',499);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','10','pc portable','Lenovo','./img/computer/pc portable/2.jpg','Lenovo IdeaPad 130 - i3 7ème Gén - 4Go - 1To - Noir - Garantie 1 Ans',929);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','11','pc portable','Lenovo ','./img/computer/pc portable/3.jpg','Lenovo PC Portable IP330-15IGM - 4Go - 1To - Noir - Garantie 1 Ans',639);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','12','pc portable','Asus','./img/computer/pc portable/4.jpg','Asus Pc Portable Gamer - F571GT- I7 - 9è Gén - Garantie 2ans',2889);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','13','pc portable','Asus','./img/computer/pc portable/5.jpg','Asus Pc Portable X540UB-GO1357T- I5 - 8Go -1To - 2Go - Silver',1629);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','14','pc portable','Lenovo ','./img/computer/pc portable/6.jpg','Lenovo Pc Portable Legion Y540 I5 9é Gén - 8Go 1To - Garantie 1ans',2918);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','15','pc portable','Apple ','./img/computer/pc portable/7.jpg','Apple MacBook Pro Retina 13 pouces - Touch bar et Touch ID',7769);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','16','pc portable','Lenovo ','./img/computer/pc portable/8.jpg','Lenovo Ideapad Pc Portable IP V145 Dual Core - Disque SSD - Garantie 1an',739);
	articles.push(article);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
	article.addArticl('entertainement','17','TV smart','Vega','./img/entertainement/TV smart/1.jpg','Vega Téléviseur Smart UHD - 55" 4K - Noir - Garantie 3 Ans',680);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','18','TV smart','Vega','./img/entertainement/TV smart/2.jpg','Vega Téléviseur Smart UHD 58" 4K - Noir - Garantie 3 ans',786);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','19','TV smart','Samsung','./img/entertainement/TV smart/3.jpg','Samsung Téléviseur 43" - Flat Smart Full HD TV - Garantie 2 Ans',850);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','20','TV smart','Telefunken','./img/entertainement/TV smart/4.jpg','Telefunken Téléviseur Smart 40" - F6683 - FullHD - Garantie 3 Ans',1089);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','21','TV smart','Telefunken','./img/entertainement/TV smart/5.jpg','Telefunken TV TELEFUNKEN - 50A8000- SMART-NETFLIX -4K-Garanti 3 ans',1275);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','22','TV smart','Tornado','./img/entertainement/TV smart/6.jpg','Tornado Téléviseur LED 58" SMART TV 4K',1918);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','23','TV smart','Hisense','./img/entertainement/TV smart/7.jpg','Hisense Téléviseur LED 65- 4K UHD - Smart - Garantie 3 ans',3249);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','24','TV smart','Maxwell','./img/entertainement/TV smart/8.jpg','Maxwell SMART TV - 50 8GB 4K Ultra HD - Récepteur intégré - Garantie 3 Ans',1329);
	articles.push(article);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
	article.addArticl('Kitchen','25','Robot','Baya','./img/Kitchen/robot/1.jpg','Baya Broyeur - Multifonction - Chopper Rapide - 500 ml - Rose',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','26','Robot','','./img/Kitchen/robot/2.jpg','Mini Mixeur de Fruits Portable électrique Rechargeable avec USB - Bleu - 380ml',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','27','Robot','','./img/Kitchen/robot/3.jpg','Mini Mixeur de Fruits Portable électrique Rechargeable avec USB - Rose - 380ml',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','28','Robot','Nicer Dicer Plus','./img/Kitchen/robot/4.jpg','Nicer Dicer Plus Broyeur Multifonction Chopper Rapide - 500 ml',18);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','29','Robot','','./img/Kitchen/robot/5.jpg','Batteur électrique 7 vitesses - Rouge',32);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','30','Robot','Baya','./img/Kitchen/robot/6.jpg','Baya Pack de Deux Broyeurs - Multifonction - Chopper Rapide - 500 ml - Rose - Vert',38);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','31','Robot','Topmatic','./img/Kitchen/robot/7.jpg','Topmatic Robot - Pétrin - 5L - 1400W - Rouge - Made in Germany - PKM-1400 - Garantie 1 An',258);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','32','Robot','Tornado','./img/Kitchen/robot/8.jpg','Sandwich Maker Panini - 750 W',33);
	articles.push(article);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
    article.addArticl('Parfum','33','Parfum','Alexander McQueen','./img/Fashion/parfum/1.jpg','Alexander McQueen McQueen Eau de Parfum - La Reine',3250)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','34','Parfum','Chloe','./img/Fashion/parfum/2.jpg','Chloe eau de parfum ',120)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','35','Parfume','Michael Kors ','./img/Fashion/parfum/3.jpg','Michael Kors WONDERLUST eau fresh eau de toilette',156)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','36','Parfum','Vurv Core ','./img/Fashion/parfum/4.jpg','Vurv Core Femme - Eau de Parfum - 100ml',300)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','37','Parfum',' Vurv','./img/Fashion/parfum/5.jpg',"Vurv Bal D'Or Femme - Eau de Parfum - 100ml",300)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','38','Parfum','Paco ','./img/Fashion/parfum/6.jpg','Paco Lady Million - Eau De Parfum - 50 ml - Femme',300)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','39','Parfum','Lord Of Fragrance','./img/Fashion/parfum/7.jpg','Lord Of Fragrance Versus Purenoir - Eau de parfum - 100ml',300)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Parfum','40','Parfum',' Elie Saab','./img/Fashion/parfum/8.jpg','Elie Saab Le Parfum Royal - eau de parfum',300)
    articles.push(article);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
    article.addArticl('Games','41','Video Games','Sony','./img/jeux/games/1.jpg','Sony PRO 2020 Playstation 4 ',89)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','42','Video Games','Sony','./img/jeux/games/2.jpg','Sony Gta 5 Edition premium ps4',120)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','43','Video Games','Sony','./img/jeux/games/3.jpg','Playstation The Last of us - Jeu PS4',156)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','44','Video Games','Sony','./img/jeux/games/4.jpg','FIFA 18 jeu PS4 - Ea sports fifa 18',320)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','45','Video Games','Sony','./img/jeux/games/5.jpg',"Sony The Last of Us Part 2 sur PS4, Édition Standard, VF",140)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','46','Video Games','Sony','./img/jeux/games/6.jpg','Sony NBA 2K21 Jeu PS4',100)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','47','Video Games','Sony','./img/jeux/games/7.jpg','Sony Jeu PS VITA - Killzone - PCSF-00243 - Garantie 1 an',98)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Games','48','Video Games','Sony','./img/jeux/games/8.jpg','Playstation The Last of us - Jeu PS4',59)
    articles.push(article);



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
var article=creatArticle()
    article.addArticl('Electronics','49','Speakers','SPARK','./img/entertainement/HP/1.jpg','SPARK Haut parleur Bluetooth',320)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','50','Speakers','LT POWER','./img/entertainement/HP/2.jpg','LT POWER Haut Parleur - Rechargeable - Al0833 - Noir - Garantie 1 an',120)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','51','Speakers','Rojem','./img/entertainement/HP/3.jpg','Rojem - Portable - Rechargeable - Bluetooth - Speaker -Supports - FM Radio - Aux In, USB & Memory Card',156)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','52','Speakers','Kisonli ','./img/entertainement/HP/4.jpg','Kisonli Haut-parleur portable KK02 - Bluetooth - Noir - Garantie 1 An',320)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','53','Speakers','Kisonli','./img/entertainement/HP/5.jpg',"Kisonli Baffle bluetooth TM8000A - Noir",140)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','54','Speakers','Kisonli ','./img/entertainement/HP/6.jpg','Kisonli Baffle bluetooth TM8000A - Noir',100)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','55','Speakers','BIG POWER','./img/entertainement/HP/7.jpg','BIG POWER PRO C266U-MF14 Haut-parleurs multimédia subwoofer 225W 2.1canaux',98)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Electronics','56','Speakers','Intex','./img/entertainement/HP/8.jpg','Intex Haut-Parleur INTEX Bluetooth 49W - Noir',59)
    articles.push(article);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var article=creatArticle()
    article.addArticl('Fashion','57','Shoes','New Balance','./img/Fashion/shoes/1.jpg','Converse All Star ox optical - M7652C - Blanc',325)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','58','Shoes','Converse','./img/Fashion/shoes/2.jpg','Converse Chaussure pour homme -Breakpoint -C159778- Noir',120)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','59','Shoes','Hummel','./img/Fashion/shoes/3.jpg','Adidas Basket originale stan smith -ee7570-Blanc&Noir',156)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','60','Shoes','Adidas ','./img/Fashion//shoes/4.jpg','Adidas Basket originale stan smith -ee7570-Blanc&Noir',320)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','61','Shoes','Hummel','./img/Fashion/shoes/5.jpg',"Hummel Hmlmarathona - Sneakers - Bleu",140)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','62','Shoes','Hummel ','./img/Fashion/shoes/6.jpg','Hummel Hmlnelsen - Sneakers - Bleu',100)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','63','Shoes','Hummel','./img/Fashion/shoes/7.jpg','Lord Of Fragrance Versus Purenoir - Eau de parfum - 100ml',98)
    articles.push(article);
var article=creatArticle()
    article.addArticl('Fashion','64','Shoes','Beya Basket','./img/Fashion/shoes/8.jpg','Beya Basket - Nour - Noir&Blanc',59)
    articles.push(article);



function logout(){
	sessionStorage.removeItem("user");

	localStorage.removeItem('buy')

	localStorage.removeItem('count')
	location.reload();
	
}
