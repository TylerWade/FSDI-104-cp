class Characters{
    constructor(image,name,points){
        this.image=image;
        this.name=name;
        this.points=points;
    }
    
}

let startPoints=400;

const scorpion=new Characters('img/scorpion.jpg','Scorpion',startPoints);
const subzero=new Characters('img/subzero.jpg','Sub-Zero',startPoints);
const baraka=new Characters('img/baraka.jpg','Baraka',startPoints);
const skarlet=new Characters('img/sonya.jpg','Sonya',startPoints);


function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname;
    this.Itemimage=Itemimage;
    this.Itemcolor= Itemcolor;
    this.Itemdamage=Itemdamage;
}

const punch = new items('Punch','~','blue',20);
const kick = new items('Kick','?','blue',30);
const speical = new items('Special','&','yellow',40);



function pictureChange1()
{
document.getElementById('theImage1').src="img/scorpion.jpg";
}
function pictureChange2()
{
document.getElementById('theImage1').src="img/subzero.jpg";
}
function pictureChange3()
{
document.getElementById('theImage2').src="img/baraka.jpg";
}
function pictureChange4()
{
document.getElementById('theImage2').src="img/sonya.jpg";
}


const ss = {
    image:'img/ss.gif',
    weigth:10,
    speed:100,
    punch:{
        damage:30
    },
    kick:{
        damage:50
    },
    speical:{
        damage:70
    },
    points:500,
    die:function(){
        return 'Scorpion and Sub-Zero are Dead';
    }
}

const bs = {
    image:'img/bs.gif',
    weigth:20,
    speed:80,
    punch:{
        damage:30
    },
    kick:{
        damage:50
    },
    special:{
        damage:70
    },
    points:500,
    die:function(){
        return 'Baraka and Sonya are Dead';
        
    }
}


let punchAttackPoints = punch.Itemdamage;
let kickAttackPoints = kick.Itemdamage;
let specialAttackPoints = speical.Itemdamage;

function bspunch() {
    ss.points = ss.points-punchAttackPoints;
    console.log('Scorpion and SUb-Zero are attacked .... points: '+ss.points);
    if(ss.points<=0)
    {
        document.getElementById('message').innerHTML=`${ss.die()} <br> <img src="${bs.image}"  width=50%>`;
        console.log(ss.die());
    }
}    
function sspunch() {
    bs.points = bs.points-punchAttackPoints;
    console.log('Baraka and Sonya are attacked .... points: '+bs.points);
    if(bs.points<=0)
    {
        document.getElementById('message').innerHTML=`${bs.die()} <br> <img src="${ss.image}"  width=50%>`;
        console.log(bs.die());
    }
}
function bskick() {
    ss.points = ss.points-kickAttackPoints;
    console.log('Scorpion and SUb-Zero are attacked .... points: '+ss.points);
    if(ss.points<=0)
    {
        document.getElementById('message').innerHTML=`${ss.die()} <br> <img src="${bs.image}"  width=50%>`;
        console.log(ss.die());
    }
}    
function sskick() {
    bs.points = bs.points-kickAttackPoints;
    console.log('Baraka and Sonya are attacked .... points: '+ss.points);
    if(bs.points<=0)
    {
        document.getElementById('message').innerHTML=`${bs.die()} <br> <img src="${ss.image}"  width=50%>`;
        console.log(bs.die());
    }
}    
function bsspeical() {
    ss.points = ss.points-specialAttackPoints;
    console.log('Scorpion and SUb-Zero are attacked .... points: '+ss.points);
    if(ss.points<=0)
    {
        document.getElementById('message').innerHTML=`${ss.die()} <br> <img src="${bs.image}"  width=50%>`;
        console.log(ss.die());
    }
}  
function ssspecial() {
    bs.points = bs.points-specialAttackPoints;
    console.log('Baraka and Sonya are attacked .... points: '+bs.points);
    if(bs.points<=0)
    {
        document.getElementById('message').innerHTML=`${bs.die()} <br> <img src="${ss.image}"  width=50%>`;
        console.log(bs.die());
    }  
}


//arbiterAttacks();
//arbiterAttacks();
