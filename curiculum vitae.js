
const myDate= document.querySelector('#myDate');
console.log(myDate);
myDate.innerText = new Date().toLocaleDateString();


const brice= {
    firstName :'Brice' ,
    lastName :'Danvidé',
    gender : 'M',
    adresse:'13 avenue Arisitide Maillol 95370',
    email:'brice_danvide@hotmail.fr',
    tel:'0641664106'


};

function sayGender(personParameter){


    if (personParameter.gender==='F'){
        return 'DEVELOPPEUSE WEB FRONT END';


    }else if (personParameter.gender==='M'){

        return 'DEVELOPPEUR WEB FRONT END';
    }

    else {
        return 'DEVELOPPEUR/EUSE WEB FRONT END';
    }
};




const titre = document.querySelector('#titree');
console.log(titre);
titre.innerText = sayGender(brice);



const nom=document.querySelector('#nomComplet');
console.log (nom);

nom.textContent = brice.lastName+' '+brice.firstName;


const adresse=document.querySelector('#adresse');
console.log (adresse);

adresse.textContent = brice.adresse;


const email=document.querySelector('#email');
console.log (email);

email.textContent = brice.email;


const telephone =document.querySelector('#tel');
console.log (telephone);

telephone.textContent = brice.tel;