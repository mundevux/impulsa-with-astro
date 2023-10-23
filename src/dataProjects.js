import logoMonteblanco from "./assets/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png";
import fachadaMonteblanco from "./assets/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg";
import logoDanubio from "./assets/Cerasus_Danubio/Logo_Cerasus_Danubio.png";
import fachadaDanubio from "./assets/Cerasus_Danubio/Fachada_Cerasus_Danubio.png";
import logoUsme from "./assets/Cerasus_Usme/Logo_Cerasus_Usme.png";
import fachadaUsme from "./assets/Cerasus_Usme/Fachada_Cerasus_Usme.jpg";
import logoTunja from "./assets/Avium_Tunja/Logo_Avium_Tunja.png";
import fachadaTunja from "./assets/Avium_Tunja/Fachada_Avium_Tunja.jpg";
import logoCerasusSextaEntrada from "./assets/Cerasus_Sexta_Entrada/Logo_Cerasus_Sexta_Entrada.png";
import fachadaCerasusSextaEntrada from "./assets/Cerasus_Sexta_Entrada/Fachada_Cerasus_Sexta_Entrada.png";
import logoPrunusSextaEntrada from "./assets/Prunus_Sexta_Entrada/Logo_Prunus_Sexta_Entrada.png";
import fachadaPrunusSextaEntrada from "./assets/Prunus_Sexta_Entrada/Fachada_Prunus_Sexta_Entrada.png";

const projects = [
  {
    id: 1,
    name: "Cerasus Monteblanco",
    price: "Desde $191.400.000",
    area: "Desde 44 m2",
    city: "Bogotá",
    type: "vis",
    text: "Un nuevo Proyecto de Vivienda de Interés Social en Bogotá, un proyecto VIS A OTRO NIVEL.",
    descriptionType: "Vivienda de interés social",
    logo: logoMonteblanco.src,
    fachada: fachadaMonteblanco.src,
    fachadaAlt: "Fachada Cerasus Monteblanco",
    logoAlt: "Logo Cerasus Monteblanco",
    link: "/projects/cerasus-monteblanco",
    note: "*Precio de 150 SMMLV proyectado al año de escrituración",
    features: [
      {
        name: "Gimnasio",
        icon: "./src/assets/Gimnasio-apartamento.png",
      },
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
      {
        name: "Centro de negocios",
        icon: "./src/assets/Business-center-apartamento.png",
      },
      {
        name: "Luoteca",
        icon: "./src/assets/Ludoteca-apartamento.png",
      },
    ],
  },
  {
    id: 2,
    name: "Cerasus Danubio",
    price: "Desde $191.400.000",
    area: "Desde 33 m2",
    city: "Bogotá",
    type: "vis",
    text: "Un nuevo concepto de construcción enfocado en dirigir el proyecto hacia un factor humano mas que monetario.",
    descriptionType: "Vivienda de interés social",
    logo: logoDanubio.src,
    fachada: fachadaDanubio.src,
    fachadaAlt: "Fachada Cerasus Danubio",
    logoAlt: "Logo Cerasus Danubio",
    link: "/projects/cerasus-danubio",
    note: "*Precio de 150 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Zona de Fogata",
        icon: "./src/assets/Zona-de-fogatas-apartamento.png",
      },
      {
        name: "Coffee Work",
        icon: "./src/assets/Coffee-Work-apartamento.png",
      },
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
      {
        name: "Terraza comunal",
        icon: "./src/assets/Terraza-comunal-apartamento.png",
      },
      {
        name: "Luoteca",
        icon: "./src/assets/Ludoteca-apartamento.png",
      },
    ],
  },
  {
    id: 3,
    name: "Cerasus Usme",
    price: "Desde $104.400.000",
    area: "Desde 41 m2",
    city: "Bogotá",
    type: "vip",
    text: "Unn proyecto de vivienda VIP (interés prioritario) construido en la Calle 110 A Sur No 3 A- 40 en la Localidad de Usme.",
    descriptionType: "Vivienda de interés prioritario",
    logo: logoUsme.src,
    fachada: fachadaUsme.src,
    fachadaAlt: "Fachada Cerasus Usme",
    logoAlt: "Logo Cerasus Usme",
    link: "/projects/cerasus-usme",
    note: "*Precio de 90 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Zona de Fogata",
        icon: "./src/assets/Zona-de-fogatas-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
      {
        name: "Zona de trote",
        icon: "./src/assets/Zona-de-trote-apartamento.png",
      },
    ],
  },
  {
    id: 4,
    name: "Avium Tunja",
    price: "Desde $200.000.000",
    area: "Desde 45 m2",
    city: "Tunja",
    type: "no vis",
    text: "Es proyecto de vivienda de estrato 3 constrido en la calle 18 No. 1-140 del sector del Rodeo en la ciudad de Tunja.",
    descriptionType: "Vivienda no VIS",
    logo: logoTunja.src,
    fachada: fachadaTunja.src,
    fachadaAlt: "Fachada Avium Tunja",
    logoAlt: "Logo Avium Tunja",
    link: "/projects/avium-tunja",
    note: "*Precio sujeto a cambios",
    features: [
      {
        name: "Piscina",
        icon: "./src/assets/Piscina-apartamento.png",
      },
      {
        name: "Gimnasio",
        icon: "./src/assets/Gimnasio-apartamento.png",
      },
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
      {
        name: "Terraza comunal",
        icon: "./src/assets/Terraza-comunal-apartamento.png",
      },
    ],
  },
  {
    id: 5,
    name: "Cerasus Sexta Entrada",
    price: "Desde $99.200.000",
    area: "Desde 46 m2",
    city: "Malambo",
    type: "vip",
    text: "Un nuevo Proyecto de Vivienda de Interés Prioritario en Barranquilla.",
    descriptionType: "Vivienda de interés prioritario",
    logo: logoCerasusSextaEntrada.src,
    fachada: fachadaCerasusSextaEntrada.src,
    fachadaAlt: "Fachada Cerasus Sexta Entrada",
    logoAlt: "Logo Cerasus Sexta Entrada",
    link: "/projects/cerasus-sexta-entrada",
    note: "*Precio de 90 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: "./src/assets/Piscina-apartamento.png",
      },
      {
        name: "Gimnasio",
        icon: "./src/assets/Gimnasio-apartamento.png",
      },
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
    ],
  },
  {
    id: 6,
    name: "Prunus Sexta Entrada",
    price: "Desde $132.250.000",
    area: "Desde 53 m2",
    city: "Malambo",
    type: "vis",
    text: "Un nuevo Proyecto de Vivienda de Interés Social en Barranquilla.",
    descriptionType: "Vivienda de interés social",
    logo: logoPrunusSextaEntrada.src,
    fachada: fachadaPrunusSextaEntrada.src,
    fachadaAlt: "Fachada Prunus Sexta Entrada",
    logoAlt: "Logo Prunus Sexta Entrada",
    link: "/projects/prunus-sexta-entrada",
    note: "*Precio de 115 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: "./src/assets/Piscina-apartamento.png",
      },
      {
        name: "Gimnasio",
        icon: "./src/assets/Gimnasio-apartamento.png",
      },
      {
        name: "Parque infantil",
        icon: "./src/assets/Salon-de-ninos-apartamento.png",
      },
      {
        name: "Salón social",
        icon: "./src/assets/Salon-social-apartamento.png",
      },
    ],
  },
];

export default projects;
