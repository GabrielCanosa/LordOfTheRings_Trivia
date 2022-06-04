import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

const QuestionScreen = ({ navigation }) => {

    const questions = [
      {
          'id': '1',
          'pregunta':'¿Quién escribió El Señor de los Anillos?', 
          'imagen':require('./Data/images/01.jpg'), 
          'respuestaCorrecta':'J. R. R. Tolkien',
          'respuestaIncorrecta1':'J. K. Rowling',
          'respuestaIncorrecta2':'Peter Jackson',
          'respuestaIncorrecta3':'George R. R. Martin'
      },
      {
          'id': '2',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/02.jpg'),
          'respuestaCorrecta':'Aragorn',
          'respuestaIncorrecta1':'Boromir',
          'respuestaIncorrecta2':'Elrond',
          'respuestaIncorrecta3':'Arod'
      },
      {
          'id': '3',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/03.jpg'), 
          'respuestaCorrecta':'Frodo',
          'respuestaIncorrecta1':'Sam',
          'respuestaIncorrecta2':'Merry',
          'respuestaIncorrecta3':'Pippin'
      }
      ,
      {
          'id': '4',
          'pregunta':'¿Cómo se llama el primer libro de El Señor de los Anillos?', 
          'imagen':require('./Data/images/04.png'), 
          'respuestaCorrecta':'La Comunidad del Anillo',
          'respuestaIncorrecta1':'El Hobbit',
          'respuestaIncorrecta2':'Las dos torres',
          'respuestaIncorrecta3':'El retorno del Rey'
      },
      {
          'id': '5',
          'pregunta':'¿Cómo se llama el director de las peliculas?', 
          'imagen':require('./Data/images/05.jpg'), 
          'respuestaCorrecta':'Peter Jackson',
          'respuestaIncorrecta1':'Guillermo del Toro',
          'respuestaIncorrecta2':'Steven Spielberg',
          'respuestaIncorrecta3':'Pedro Almodóvar'
      },
      {
          'id': '6',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/06.png'), 
          'respuestaCorrecta':'Gollum',
          'respuestaIncorrecta1':'Smeagol',
          'respuestaIncorrecta2':'Déagol',
          'respuestaIncorrecta3':'Frigol'
      },
      {
          'id': '7',
          'pregunta':'¿Cómo se llama el Rey de Rohan?', 
          'imagen':require('./Data/images/07.jpg'), 
          'respuestaCorrecta':'Théoden',
          'respuestaIncorrecta1':'Thengel',
          'respuestaIncorrecta2':'Eomer',
          'respuestaIncorrecta3':'Éowyn'
      },
      {
          'id': '8',
          'pregunta':'¿Cómo se llama el personaje antagonista de El Señor de los Anillos?', 
          'imagen':require('./Data/images/08.jpg'), 
          'respuestaCorrecta':'Sauron',
          'respuestaIncorrecta1':'Melkor',
          'respuestaIncorrecta2':'Voldemort',
          'respuestaIncorrecta3':'Saruman'
      },
      {
          'id': '9',
          'pregunta':'¿Cómo se este objeto?', 
          'imagen':require('./Data/images/09.jpg'), 
          'respuestaCorrecta':'Palantir',
          'respuestaIncorrecta1':'Aranrúth',
          'respuestaIncorrecta2':'Dagor Dagorath',
          'respuestaIncorrecta3':'Ainur'
      },
      {
          'id': '10',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/10.png'), 
          'respuestaCorrecta':'Galadriel',
          'respuestaIncorrecta1':'Nenya',
          'respuestaIncorrecta2':'Eldar',
          'respuestaIncorrecta3':'Arwen'
      },
      {
          'id': '11',
          'pregunta':'¿Cómo se llama la tercera pelicula de El Señor de los Anillos?', 
          'imagen':require('./Data/images/11.jpg'), 
          'respuestaCorrecta':'El retorno del Rey',
          'respuestaIncorrecta1':'Las dos torres',
          'respuestaIncorrecta2':'La Comunidad del Anillo',
          'respuestaIncorrecta3':'El Hobbit'
      }
      ,
      {
          'id': '12',
          'pregunta':'¿En cuantas peliculas se dividió El Hobbit?', 
          'imagen':require('./Data/images/12.jpeg'), 
          'respuestaCorrecta':'3',
          'respuestaIncorrecta1':'2',
          'respuestaIncorrecta2':'1',
          'respuestaIncorrecta3':'No han hecho peliculas de El Hobbit'
      }
      ,
      {
          'id': '13',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/13.png'), 
          'respuestaCorrecta':'Pippin',
          'respuestaIncorrecta1':'Sam',
          'respuestaIncorrecta2':'Frodo',
          'respuestaIncorrecta3':'Merry'
      }
      ,
      {
          'id': '14',
          'pregunta':'¿Cuál es la principal característica de los elfos?', 
          'imagen':require('./Data/images/14.jpg'), 
          'respuestaCorrecta':'Son inmortales',
          'respuestaIncorrecta1':'Son rubios',
          'respuestaIncorrecta2':'Son altos',
          'respuestaIncorrecta3':'Son delgados'
      },
      {
          'id': '15',
          'pregunta':'¿Cuántos integrantes habia originalmente en La Comunidad del Anillo?', 
          'imagen':require('./Data/images/15.jpg'), 
          'respuestaCorrecta':'9',
          'respuestaIncorrecta1':'8',
          'respuestaIncorrecta2':'3',
          'respuestaIncorrecta3':'2'
      },
      {
          'id': '16',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/16.jpg'), 
          'respuestaCorrecta':'Gandalf',
          'respuestaIncorrecta1':'Saruman',
          'respuestaIncorrecta2':'Aragorn',
          'respuestaIncorrecta3':'Legolas'
      },
      {
          'id': '17',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/17.jpg'), 
          'respuestaCorrecta':'Bilbo Bolsón',
          'respuestaIncorrecta1':'Frodo',
          'respuestaIncorrecta2':'Sam',
          'respuestaIncorrecta3':'Hobbiton'
      },
      {
          'id': '18',
          'pregunta':'¿A quién pertenece el reino de Erebor?', 
          'imagen':require('./Data/images/18.jpg'), 
          'respuestaCorrecta':'A los enanos',
          'respuestaIncorrecta1':'A los elfos',
          'respuestaIncorrecta2':'A los hobbits',
          'respuestaIncorrecta3':'A los hombres'
      },
      {
          'id': '19',
          'pregunta':'¿Quién creo a los Uruk-hai?', 
          'imagen':require('./Data/images/19.jpeg'), 
          'respuestaCorrecta':'Saruman',
          'respuestaIncorrecta1':'Sauron',
          'respuestaIncorrecta2':'No se sabe',
          'respuestaIncorrecta3':'Los elfos'
      },
      {
          'id': '20',
          'pregunta':'¿Qué es este objeto?', 
          'imagen':require('./Data/images/20.jpg'), 
          'respuestaCorrecta':'El Anillo Único',
          'respuestaIncorrecta1':'El Anillo Dorado',
          'respuestaIncorrecta2':'El Anillo de Oro',
          'respuestaIncorrecta3':'Solo un anillo'
      },
      {
          'id': '21',
          'pregunta':'¿Quién consigue derrotar a Sauron y sacarle el anillo?', 
          'imagen':require('./Data/images/21.png'), 
          'respuestaCorrecta':'Isildur',
          'respuestaIncorrecta1':'Aragorn',
          'respuestaIncorrecta2':'Gandalf',
          'respuestaIncorrecta3':'Nadie'
      },
      {
          'id': '22',
          'pregunta':'¿Cómo se llama la espada con la que Isildur consigue derrotar a Sauron y sacarle el anillo?', 
          'imagen':require('./Data/images/22.jpg'), 
          'respuestaCorrecta':'Narsil',
          'respuestaIncorrecta1':'Elendil',
          'respuestaIncorrecta2':'Elessar',
          'respuestaIncorrecta3':'Punta de Nieve'
      },
      {
          'id': '23',
          'pregunta':'¿Cómo se llama la segunda pelicula de El Hobbit?', 
          'imagen':require('./Data/images/23.jpg'), 
          'respuestaCorrecta':'La desolación de Smaug',
          'respuestaIncorrecta1':'Un viaje inesperado',
          'respuestaIncorrecta2':'La Batalla de los Cinco Ejércitos',
          'respuestaIncorrecta3':'Las dos torres'
      },
      {
          'id': '24',
          'pregunta':'¿Quién era Smaug?', 
          'imagen':require('./Data/images/24.jpg'), 
          'respuestaCorrecta':'Un dragon',
          'respuestaIncorrecta1':'Un enano',
          'respuestaIncorrecta2':'Un elfo',
          'respuestaIncorrecta3':'Un poderoso hechicero'
      },
      {
          'id': '25',
          'pregunta':'¿A que raza pertenece Thorin Escudo de Roble?', 
          'imagen':require('./Data/images/25.jpg'), 
          'respuestaCorrecta':'Enanos',
          'respuestaIncorrecta1':'Elfos',
          'respuestaIncorrecta2':'Orcos',
          'respuestaIncorrecta3':'Humano'
      },
      {
          'id': '26',
          'pregunta':'¿A que personaje consigue matar este Uruk-hai?',
          'imagen':require('./Data/images/26.jpg'), 
          'respuestaCorrecta':'Boromir',
          'respuestaIncorrecta1':'Pippin',
          'respuestaIncorrecta2':'Merry',
          'respuestaIncorrecta3':'Gandalf'
      },
      {
          'id': '27',
          'pregunta':'¿Cómo se llama el Senescal de Gondor?',
          'imagen':require('./Data/images/27.png'), 
          'respuestaCorrecta':'Denethor',
          'respuestaIncorrecta1':'Faramir',
          'respuestaIncorrecta2':'Boromir',
          'respuestaIncorrecta3':'Ecthelion'
      },
      {
          'id': '28',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/28.png'), 
          'respuestaCorrecta':'Haldir',
          'respuestaIncorrecta1':'Elrond',
          'respuestaIncorrecta2':'Galadriel',
          'respuestaIncorrecta3':'Arwen'
      },
      {
          'id': '29',
          'pregunta':'¿Cómo se llama este lugar?',
          'imagen':require('./Data/images/29.jpg'), 
          'respuestaCorrecta':'Amon Hen',
          'respuestaIncorrecta1':'Hobbiton',
          'respuestaIncorrecta2':'Lothlorien',
          'respuestaIncorrecta3':'Harad'
      },
      {
          'id': '30',
          'pregunta':'¿Quién el Melkor?',
          'imagen':require('./Data/images/30.jpg'), 
          'respuestaCorrecta':'El antecesor de Sauron',
          'respuestaIncorrecta1':'El elfo muy poderoso',
          'respuestaIncorrecta2':'El padre de Aragorn',
          'respuestaIncorrecta3':'El enemigo de Sauron'
      },
      {
          'id': '31',
          'pregunta':'¿Cómo se llama el caballo de Gandalf?',
          'imagen':require('./Data/images/31.jpg'), 
          'respuestaCorrecta':'Sombragrís',
          'respuestaIncorrecta1':'Sombraveloz',
          'respuestaIncorrecta2':'Sombranegra',
          'respuestaIncorrecta3':'Sombraoscura'
      },
      {
          'id': '32',
          'pregunta':'¿Quién es Rey de Gondor al final de El Señor de los Anillos?',
          'imagen':require('./Data/images/32.jpg'), 
          'respuestaCorrecta':'Aragorn',
          'respuestaIncorrecta1':'Denethor',
          'respuestaIncorrecta2':'Boromir',
          'respuestaIncorrecta3':'Gondor no tiene Rey, Gondor no necesita Rey'
      },
      {
          'id': '33',
          'pregunta':'¿De que ciudad es característico el árbol blanco?',
          'imagen':require('./Data/images/33.jpg'), 
          'respuestaCorrecta':'Gondor',
          'respuestaIncorrecta1':'Rohan',
          'respuestaIncorrecta2':'Isengard',
          'respuestaIncorrecta3':'Hobbiton'
      },
      {
          'id': '34',
          'pregunta':'¿Cómo se llaman los 4 hobbits de la comunidad del anillo?',
          'imagen':require('./Data/images/34.jpg'), 
          'respuestaCorrecta':'Frodo, Sam, Pippin y Merry',
          'respuestaIncorrecta1':'Frodo, Sam, Pippin y Gloin',
          'respuestaIncorrecta2':'Frodo, Gandalf, Thorin y Merry',
          'respuestaIncorrecta3':'Sólo habia 2 hobbits en la comunidad del anillo'
      },
      {
          'id': '35',
          'pregunta':'¿De dónde es Rey Thranduil?',
          'imagen':require('./Data/images/35.jpeg'), 
          'respuestaCorrecta':'Del Bosque Negro',
          'respuestaIncorrecta1':'Del Bosque Verde',
          'respuestaIncorrecta2':'De Rohan',
          'respuestaIncorrecta3':'Del Bosque Plateado'
      },
      {
          'id': '36',
          'pregunta':'¿Cómo se llama la torre que se encontraba en el centro del Anillo de Isengard?',
          'imagen':require('./Data/images/36.jpg'), 
          'respuestaCorrecta':'Orthanc',
          'respuestaIncorrecta1':'Torre del Palantir',
          'respuestaIncorrecta2':'Calenardhon',
          'respuestaIncorrecta3':'Enedwaith'
      },
      {
          'id': '37',
          'pregunta':'¿Cómo se llama este lugar?',
          'imagen':require('./Data/images/37.jpg'), 
          'respuestaCorrecta':'Puerta Negra',
          'respuestaIncorrecta1':'Puerta Oscura',
          'respuestaIncorrecta2':'Puerta del Mal',
          'respuestaIncorrecta3':'Puerta del Infierno'
      },
      {
          'id': '38',
          'pregunta':'¿Cómo se llama este lugar?',
          'imagen':require('./Data/images/38.jpg'), 
          'respuestaCorrecta':'Minas Morgul',
          'respuestaIncorrecta1':'Mordor',
          'respuestaIncorrecta2':'Cirith Ungol',
          'respuestaIncorrecta3':'Khamûl'
      },
      {
          'id': '39',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/39.jpg'), 
          'respuestaCorrecta':'Ella-Laraña',
          'respuestaIncorrecta1':'Spider',
          'respuestaIncorrecta2':'Sam la Araña',
          'respuestaIncorrecta3':'Dardo'
      },
      {
          'id': '40',
          'pregunta':'¿Cómo se llama la primera pelicula de El Hobbit?', 
          'imagen':require('./Data/images/40.jpg'), 
          'respuestaCorrecta':'Un viaje inesperado',
          'respuestaIncorrecta1':'La desolación de Smaug',
          'respuestaIncorrecta2':'La Batalla de los Cinco Ejércitos',
          'respuestaIncorrecta3':'La Comunidad del Anillo'
      },
      {
          'id': '41',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/41.png'), 
          'respuestaCorrecta':'Arwen',
          'respuestaIncorrecta1':'Elrond',
          'respuestaIncorrecta2':'Galadriel',
          'respuestaIncorrecta3':'Haldir'
      },
      {
          'id': '42',
          'pregunta':'¿Cómo se llama la segunda pelicula de El Señor de los Anillos?', 
          'imagen':require('./Data/images/42.jpg'), 
          'respuestaCorrecta':'Las dos torres',
          'respuestaIncorrecta1':'La Comunidad del Anillo',
          'respuestaIncorrecta2':'El retorno del Rey',
          'respuestaIncorrecta3':'El Hobbit'
      },
      {
          'id': '43',
          'pregunta':'¿Cómo se llama la espada que Bilbo le regala a Frodo?',
          'imagen':require('./Data/images/43.jpg'), 
          'respuestaCorrecta':'Dardo',
          'respuestaIncorrecta1':'Muerte',
          'respuestaIncorrecta2':'Mithril',
          'respuestaIncorrecta3':'No tiene nombre'
      },
      {
          'id': '44',
          'pregunta':'¿Cuántos Nazgûl hay?',
          'imagen':require('./Data/images/44.jpg'), 
          'respuestaCorrecta':'9',
          'respuestaIncorrecta1':'7',
          'respuestaIncorrecta2':'1',
          'respuestaIncorrecta3':'3'
      },
      {
          'id': '45',
          'pregunta':'¿Qué otro nombre tiene la ciudad de Imladris?',
          'imagen':require('./Data/images/45.jpeg'), 
          'respuestaCorrecta':'Rivendel',
          'respuestaIncorrecta1':'Lórien',
          'respuestaIncorrecta2':'Erebor',
          'respuestaIncorrecta3':'La Montaña Solitaria'
      },
      {
          'id': '46',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/46.jpg'), 
          'respuestaCorrecta':'Grima Lengua de Serpiente',
          'respuestaIncorrecta1':'Thorin Escudo de Roble',
          'respuestaIncorrecta2':'Gumbold el Sabio',
          'respuestaIncorrecta3':'Tronin el Loco'
      },
      {
          'id': '47',
          'pregunta':'¿En qué lugar la Comunidad del Anillo se encuentra con el Balrog?',
          'imagen':require('./Data/images/47.jpg'), 
          'respuestaCorrecta':'Moria',
          'respuestaIncorrecta1':'Rivendel',
          'respuestaIncorrecta2':'Mordor',
          'respuestaIncorrecta3':'Isengard'
      },
      {
          'id': '48',
          'pregunta':'¿Cuál es el nombre completo de Sam?',
          'imagen':require('./Data/images/48.png'), 
          'respuestaCorrecta':'Samsagaz Gamyi',
          'respuestaIncorrecta1':'Samsagaz',
          'respuestaIncorrecta2':'Sam',
          'respuestaIncorrecta3':'Samsagaz Bolsón'
      },
      {
          'id': '49',
          'pregunta':'¿En qué lugar se conocen Frodo y Aragorn en la Comunidad del Anillo?',
          'imagen':require('./Data/images/49.png'), 
          'respuestaCorrecta':'La Posada del Pony Pisador',
          'respuestaIncorrecta1':'Las Montañas Nubladas',
          'respuestaIncorrecta2':'La Atalaya de Amon Sûl',
          'respuestaIncorrecta3':'Monte Gundabad'
      },
      {
          'id': '50',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/50.jpg'), 
          'respuestaCorrecta':'Elrond',
          'respuestaIncorrecta1':'Númenor',
          'respuestaIncorrecta2':'Galadriel',
          'respuestaIncorrecta3':'Sam'
      },
      {
          'id': '51',
          'pregunta':'¿Cómo se llama el regalo que Galadriel le da a Frodo?',
          'imagen':require('./Data/images/51.jpg'), 
          'respuestaCorrecta':'Luz de Eärendil',
          'respuestaIncorrecta1':'Luz del Alba',
          'respuestaIncorrecta2':'Luz de Galadriel',
          'respuestaIncorrecta3':'Luz de los elfos'
      },
      {
          'id': '52',
          'pregunta':'Saruman, Gandalf y Radagast, ¿A qué orden pertenecen?',
          'imagen':require('./Data/images/52.jpg'), 
          'respuestaCorrecta':'La Orden de los Istari',
          'respuestaIncorrecta1':'La Orden de los Maiar',
          'respuestaIncorrecta2':'La Orden de los Hechiceros',
          'respuestaIncorrecta3':'La Orden de los Conjuradores'
      },
      {
          'id': '53',
          'pregunta':'¿Quiéns salvan a Frodo y a Sam de la lava del Monte del Destino?',
          'imagen':require('./Data/images/53.jpg'), 
          'respuestaCorrecta':'Las Águilas',
          'respuestaIncorrecta1':'Gandalf',
          'respuestaIncorrecta2':'Los Elfos',
          'respuestaIncorrecta3':'Los Halcones'
      },
      {
          'id': '54',
          'pregunta':'¿Dé que qué libros de J. R. R. Tolkien no se han hecho peliculas?',
          'imagen':require('./Data/images/54.jpg'), 
          'respuestaCorrecta':'Todas son correctas',
          'respuestaIncorrecta1':'El Silmarillion',
          'respuestaIncorrecta2':'El camino perdido',
          'respuestaIncorrecta3':'La historia de Beren y Lúthien'
      },
      {
          'id': '55',
          'pregunta':'¿Cómo se llama este personaje?',
          'imagen':require('./Data/images/55.jpg'), 
          'respuestaCorrecta':'Gimli',
          'respuestaIncorrecta1':'Gloin',
          'respuestaIncorrecta2':'Legolas',
          'respuestaIncorrecta3':'Balin'
      },
      {
          'id': '56',
          'pregunta':'¿Cómo se llama el actor que interpreta a Gandalf?',
          'imagen':require('./Data/images/56.jpeg'), 
          'respuestaCorrecta':'Ian McKellen',
          'respuestaIncorrecta1':'Christopher Lee',
          'respuestaIncorrecta2':'John Rhys-Davies',
          'respuestaIncorrecta3':'Sean Bean'
      },
      {
          'id': '57',
          'pregunta':'¿Quién es Celeborn?',
          'imagen':require('./Data/images/57.png'), 
          'respuestaCorrecta':'El Señor de Lothlórien',
          'respuestaIncorrecta1':'El hijo de Galadriel',
          'respuestaIncorrecta2':'El marido de Arwen',
          'respuestaIncorrecta3':'El padre de Galadriel'
      },
      {
          'id': '58',
          'pregunta':'¿Quén es el Mithril?',
          'imagen':require('./Data/images/58.jpg'), 
          'respuestaCorrecta':'Todas son correctas',
          'respuestaIncorrecta1':'Es un metal plateado precioso y muy ligero',
          'respuestaIncorrecta2':'Es un mineral que se extraia por los Enanos en Khazad-dûm',
          'respuestaIncorrecta3':'El material de la cota de malla que lleva Frodo'
      },
      {
          'id': '59',
          'pregunta':'¿Quién es este personaje?',
          'imagen':require('./Data/images/59.jpg'), 
          'respuestaCorrecta':'Boca de Sauron',
          'respuestaIncorrecta1':'Sauron',
          'respuestaIncorrecta2':'Ojos de Sauron',
          'respuestaIncorrecta3':'Melkor'
      },
      {
          'id': '60',
          'pregunta':'¿Cómo se llama el sobrino de Théoden?',
          'imagen':require('./Data/images/60.png'), 
          'respuestaCorrecta':'Éomer',
          'respuestaIncorrecta1':'Éowyn',
          'respuestaIncorrecta2':'No tiene sobrino',
          'respuestaIncorrecta3':'Théodred'
      },
      {
          'id': '61',
          'pregunta':'¿Cómo se llama este lugar?',
          'imagen':require('./Data/images/61.jpg'), 
          'respuestaCorrecta':'Abismo de Helm',
          'respuestaIncorrecta1':'Isengard',
          'respuestaIncorrecta2':'Rohan',
          'respuestaIncorrecta3':'Gondor'
      },
      {
          'id': '62',
          'pregunta':'¿Cómo se llama la capital de Gondor?',
          'imagen':require('./Data/images/62.jpg'), 
          'respuestaCorrecta':'Minas Tirith',
          'respuestaIncorrecta1':'Osgiliath',
          'respuestaIncorrecta2':'Anduin',
          'respuestaIncorrecta3':'Ithilien'
      },
      {
          'id': '63',
          'pregunta':'¿Quién es Legolas?',
          'imagen':require('./Data/images/63.jpg'), 
          'respuestaCorrecta':'Todas son correctas',
          'respuestaIncorrecta1':'Es el hijo del Rey Thranduil',
          'respuestaIncorrecta2':'Es el elfo de la Comunidad del Anillo',
          'respuestaIncorrecta3':'Es un gran guerrero elfo'
      },
      {
          'id': '64',
          'pregunta':'¿Que lugar es conocido por ser las tierras donde habitan los Valar, y por ser la morada principal de los Elfos?',
          'imagen':require('./Data/images/64.jpg'), 
          'respuestaCorrecta':'Tierras Imperecederas',
          'respuestaIncorrecta1':'Tierras Inmortales',
          'respuestaIncorrecta2':'Reino Inmortal',
          'respuestaIncorrecta3':'Tierras del Sol'
      },
      {
          'id': '65',
          'pregunta':'¿Cómo muere este orco?',
          'imagen':require('./Data/images/65.jpg'), 
          'respuestaCorrecta':'Pisado por Barbol',
          'respuestaIncorrecta1':'Por la lanza de un rohirrim',
          'respuestaIncorrecta2':'Eomer le corta la cabeza',
          'respuestaIncorrecta3':'Lo mata un uruk-hai'
      },
      {
          'id': '66',
          'pregunta':'¿Cómo se llama la tercera pelicula de El Hobbit?', 
          'imagen':require('./Data/images/66.jpg'), 
          'respuestaCorrecta':'La Batalla de los Cinco Ejércitos',
          'respuestaIncorrecta1':'La desolación de Smaug',
          'respuestaIncorrecta2':'Un viaje inesperado',
          'respuestaIncorrecta3':'El retorno del Rey'
      },
      {
          'id': '67',
          'pregunta':'¿A quién pertenece Isengard?', 
          'imagen':require('./Data/images/67.jpg'), 
          'respuestaCorrecta':'Saruman',
          'respuestaIncorrecta1':'Sauron',
          'respuestaIncorrecta2':'No se sabe',
          'respuestaIncorrecta3':'Los elfos'
      },
      {
          'id': '68',
          'pregunta':'¿De dónde es característica la mano blanca?', 
          'imagen':require('./Data/images/68.jpg'), 
          'respuestaCorrecta':'Isengard',
          'respuestaIncorrecta1':'Mordor',
          'respuestaIncorrecta2':'Gondor',
          'respuestaIncorrecta3':'Rohan'
      },

      {
          'id': '69',
          'pregunta':'¿A qeé personaje pertenece esta hacha?', 
          'imagen':require('./Data/images/69.jpg'), 
          'respuestaCorrecta':'Gimli',
          'respuestaIncorrecta1':'Sauron',
          'respuestaIncorrecta2':'No se sabe',
          'respuestaIncorrecta3':'Legolas'
      },
      {
          'id': '70',
          'pregunta':'¿Cómo se llama la primera pelicula de El Señor de los Anillos?', 
          'imagen':require('./Data/images/70.jpg'), 
          'respuestaCorrecta':'La Comunidad del Anillo',
          'respuestaIncorrecta1':'Las dos torres',
          'respuestaIncorrecta2':'El retorno del Rey',
          'respuestaIncorrecta3':'El Hobbit'
      }

      ,
      {
          'id': '71',
          'pregunta':'¿Cuál es la última frase que Gandalf el Gris le dice a la Comunidad del Anillo?', 
          'imagen':require('./Data/images/71.jpg'), 
          'respuestaCorrecta':'Corred insensatos',
          'respuestaIncorrecta1':'Nos veremos pronto',
          'respuestaIncorrecta2':'Es por allí',
          'respuestaIncorrecta3':'Adios, mis amigos'
      }
      ,
      {
          'id': '72',
          'pregunta':'¿Quién es el Rey Brujo de Angmar?', 
          'imagen':require('./Data/images/72.jpg'), 
          'respuestaCorrecta':'El Señor de los Nazgûl',
          'respuestaIncorrecta1':'Sauron',
          'respuestaIncorrecta2':'Melkor',
          'respuestaIncorrecta3':'Saruman'
      }
      ,
      {
          'id': '73',
          'pregunta':'¿Cómo se llama la raza de los hombres que es capaz de convertirse en oso?', 
          'imagen':require('./Data/images/73.jpg'), 
          'respuestaCorrecta':'Cambiapieles',
          'respuestaIncorrecta1':'Hombres Oso',
          'respuestaIncorrecta2':'Cambiacueros',
          'respuestaIncorrecta3':'Hombres de los bosques'
      }
      ,
      {
          'id': '74',
          'pregunta':'¿Cuál es el apodo del orco Azog?', 
          'imagen':require('./Data/images/74.jpeg'), 
          'respuestaCorrecta':'El profanador',
          'respuestaIncorrecta1':'El destructor',
          'respuestaIncorrecta2':'El malvado',
          'respuestaIncorrecta3':'El sin mano'
      }
      ,
      {
          'id': '75',
          'pregunta':'¿Qué le pasa a Viggo Mortensen durante la filmación de esta escena?', 
          'imagen':require('./Data/images/75.jpg'), 
          'respuestaCorrecta':'Se rompe dos dedos del pie',
          'respuestaIncorrecta1':'Nada, está actuando',
          'respuestaIncorrecta2':'Le duelen las rodillas',
          'respuestaIncorrecta3':'Se tropieza y se cae'
      }
      ,
      {
          'id': '76',
          'pregunta':'¿Es verdad que un mago nunca llega tarde ni pronto?', 
          'imagen':require('./Data/images/76.png'), 
          'respuestaCorrecta':'Llega exactamente cuando se lo propone',
          'respuestaIncorrecta1':'puede llegar tarde pero no pronto',
          'respuestaIncorrecta2':'puede llegar pronto pero no tarde',
          'respuestaIncorrecta3':'puede llegar tarde o pronto'
      }
      ,
      {
          'id': '77',
          'pregunta':'¿Dónde debe ser destruido el anillo único?', 
          'imagen':require('./Data/images/77.jpg'), 
          'respuestaCorrecta':'en el Monte del Destino',
          'respuestaIncorrecta1':'en el Monte del Misterio',
          'respuestaIncorrecta2':'en el Monte del Mal',
          'respuestaIncorrecta3':'No debe ser destruido'
      }
      ,
      {
          'id': '78',
          'pregunta':'¿Cómo se llama la batalla en la que Rohan acude en la ayuda de Gondor?', 
          'imagen':require('./Data/images/78.jpg'), 
          'respuestaCorrecta':'Batalla de los Campos del Pelennor',
          'respuestaIncorrecta1':'Batalla de Gondor',
          'respuestaIncorrecta2':'Rohan nunca acudió en ayuda de Gondor',
          'respuestaIncorrecta3':'Batalla de Minas Tirith'
      }
      ,
      {
          'id': '79',
          'pregunta':'¿Cómo se llama el actor que intepreta a Frodo?', 
          'imagen':require('./Data/images/79.jpg'), 
          'respuestaCorrecta':'Elijah Wood',
          'respuestaIncorrecta1':'Dominic Monaghan',
          'respuestaIncorrecta2':'Sean Astin',
          'respuestaIncorrecta3':'Billy Boyd'
      }
      ,
      {
          'id': '80',
          'pregunta':'¿Cuál es la principal característica de la espada Dardo cuando hay orcos cerca?', 
          'imagen':require('./Data/images/80.jpg'), 
          'respuestaCorrecta':'Su hoja se vuelve de un color azul intenso',
          'respuestaIncorrecta1':'Su hoja se vuelve de un color rojo intenso',
          'respuestaIncorrecta2':'Su portador puede desaparecer',
          'respuestaIncorrecta3':'Su portador se vuelve inmortal'
      }
      ,
      {
          'id': '81',
          'pregunta':'¿A qué poderoso enemigo derrota la Comunidad del Anillo dentro de Moria?', 
          'imagen':require('./Data/images/81.jpg'), 
          'respuestaCorrecta':'A un Troll de las cavernas',
          'respuestaIncorrecta1':'A un Troll de las montañas',
          'respuestaIncorrecta2':'A un Troll de piedra',
          'respuestaIncorrecta3':'Al orco Azog el Profanador'
      }
      ,
      {
          'id': '82',
          'pregunta':'¿Cómo se abre la puerta a la Minas de Moria?', 
          'imagen':require('./Data/images/82.jpg'), 
          'respuestaCorrecta':'Diciendo la palabra "amigo" en élfico',
          'respuestaIncorrecta1':'Diciendo la palabra "bienvenido" en élfico',
          'respuestaIncorrecta2':'Con una llave especial',
          'respuestaIncorrecta3':'Diciendo la palabra "hola" en élfico'
      }
      ,
      {
          'id': '83',
          'pregunta':'¿Quién da muerte al Rey Brujo?', 
          'imagen':require('./Data/images/83.jpg'), 
          'respuestaCorrecta':'Éowyn',
          'respuestaIncorrecta1':'Eomer',
          'respuestaIncorrecta2':'Theoden',
          'respuestaIncorrecta3':'Aragorn'
      }
      ,
      {
          'id': '84',
          'pregunta':'¿Cómo se llama el actor que interpreta a Sam?', 
          'imagen':require('./Data/images/84.jpg'), 
          'respuestaCorrecta':'Sean Astin',
          'respuestaIncorrecta1':'Sean Bean',
          'respuestaIncorrecta2':'Billy Boyd',
          'respuestaIncorrecta3':'John Rhys-Davies'
      }
      ,
      {
          'id': '85',
          'pregunta':'¿Cómo se llama a estos seres?', 
          'imagen':require('./Data/images/85.jpg'), 
          'respuestaCorrecta':'olifantes o mûmakil',
          'respuestaIncorrecta1':'elefantes gigantes',
          'respuestaIncorrecta2':'los Harad',
          'respuestaIncorrecta3':'los Ents'
      }
      ,
      {
          'id': '86',
          'pregunta':'¿En qué pelicula no aparece Bilbo Bolsón?', 
          'imagen':require('./Data/images/86.jpg'), 
          'respuestaCorrecta':'El Señor de los Anillos: Las dos torres',
          'respuestaIncorrecta1':'El Hobbit: Partida y Regreso',
          'respuestaIncorrecta2':'El Señor de los Anillos: El Retorno del Rey',
          'respuestaIncorrecta3':'El Señor de los Anillos: La Comunidad del Anillo'
      }
      ,
      {
          'id': '87',
          'pregunta':'¿Cuántos años cumple Bilbo Bolsón en La Comunidad del Anillo?', 
          'imagen':require('./Data/images/87.jpg'), 
          'respuestaCorrecta':'111',
          'respuestaIncorrecta1':'110',
          'respuestaIncorrecta2':'100',
          'respuestaIncorrecta3':'121'
      }
      ,
      {
          'id': '88',
          'pregunta':'¿Cómo se llama este personaje?', 
          'imagen':require('./Data/images/88.jpg'), 
          'respuestaCorrecta':'Bardo',
          'respuestaIncorrecta1':'Dardo',
          'respuestaIncorrecta2':'Thorin',
          'respuestaIncorrecta3':'Gloin'
      }
      ,
      {
          'id': '89',
          'pregunta':'¿Cómo se llama el actor que intepreta a Legolas?', 
          'imagen':require('./Data/images/89.jpg'), 
          'respuestaCorrecta':'Orlando Bloom',
          'respuestaIncorrecta1':'Andy Serkis',
          'respuestaIncorrecta2':'Bernard Hill',
          'respuestaIncorrecta3':'Viggo Mortensen'
      }
      ,
      {
          'id': '90',
          'pregunta':'¿Dónde muere el elfo Haldir?', 
          'imagen':require('./Data/images/90.jpg'), 
          'respuestaCorrecta':'El la batalla del Abismo de Helm',
          'respuestaIncorrecta1':'No muere, los elfos son inmortales',
          'respuestaIncorrecta2':'En la batalla en la Puerta Negra',
          'respuestaIncorrecta3':'Defendiendo Lórien de los orcos'
      }
      ,
      {
          'id': '91',
          'pregunta':'¿Cómo llama Gollum al anillo?', 
          'imagen':require('./Data/images/91.jpg'), 
          'respuestaCorrecta':'Mi tesoro',
          'respuestaIncorrecta1':'Mi anillo',
          'respuestaIncorrecta2':'Mi alma',
          'respuestaIncorrecta3':'Mi hechizo'
      }
      ,
      {
          'id': '92',
          'pregunta':'¿Qué personaje de las peliculas del Hobbit no existe en el libro?', 
          'imagen':require('./Data/images/92.jpg'), 
          'respuestaCorrecta':'Tauriel',
          'respuestaIncorrecta1':'Azog',
          'respuestaIncorrecta2':'Gandalf',
          'respuestaIncorrecta3':'Radagast'
      }
      ,
      {
          'id': '93',
          'pregunta':'¿Quién consigue curar a Thoden y sacarle el embrujo de Saruman?', 
          'imagen':require('./Data/images/93.jpg'), 
          'respuestaCorrecta':'Gandalf el Blanco',
          'respuestaIncorrecta1':'Grima lengua de serpiente',
          'respuestaIncorrecta2':'Aragorn',
          'respuestaIncorrecta3':'Legolas'
      }
      ,
      {
          'id': '94',
          'pregunta':'¿Cómo se llama la actriz que interprea a Galadriel?', 
          'imagen':require('./Data/images/94.jpg'), 
          'respuestaCorrecta':'Cate Blanchett',
          'respuestaIncorrecta1':'Liv Tyler',
          'respuestaIncorrecta2':'Miranda Otto',
          'respuestaIncorrecta3':'Emilia Clarke'
      }
      ,
      {
          'id': '95',
          'pregunta':'¿Cómo muere Aragorn durante la trilogia de El Señor de los Anillos?', 
          'imagen':require('./Data/images/95.jpg'), 
          'respuestaCorrecta':'No muere',
          'respuestaIncorrecta1':'Lo mata un troll en la batalla de la Puerta Negra',
          'respuestaIncorrecta2':'Lo mata Éowyn dandole comida envenenada',
          'respuestaIncorrecta3':'Cae al abismo con un huargo'
      }
      ,
      {
          'id': '96',
          'pregunta':'¿Cuántos enanos acompañan a Bilbo y a Gandalf en la pelicula El Hobbit: Un Viaje Inesperado?', 
          'imagen':require('./Data/images/96.jpg'), 
          'respuestaCorrecta':'13',
          'respuestaIncorrecta1':'10',
          'respuestaIncorrecta2':'9',
          'respuestaIncorrecta3':'7'
      }
      ,
      {
          'id': '97',
          'pregunta':'¿Por qué otro nombre se lo conoce a Aragorn?', 
          'imagen':require('./Data/images/97.jpg'), 
          'respuestaCorrecta':'Trancos',
          'respuestaIncorrecta1':'Narsil',
          'respuestaIncorrecta2':'Arathorn II',
          'respuestaIncorrecta3':'Barahir'
      }
      ,
      {
          'id': '98',
          'pregunta':'¿Qué consejo le da Gandalf a Merry cuando se pierden dentro de Moria?', 
          'imagen':require('./Data/images/98.jpg'), 
          'respuestaCorrecta':'Que siga su olfato',
          'respuestaIncorrecta1':'Que siga su instinto',
          'respuestaIncorrecta2':'Que siga a su corazón',
          'respuestaIncorrecta3':'Que siga a sus amigos'
      }
      ,
      {
          'id': '99',
          'pregunta':'¿Qué frase célebre pronuncia Gothmog?', 
          'imagen':require('./Data/images/99.jpeg'), 
          'respuestaCorrecta':'La edad de los hombres termina. El tiempo del orco ha llegado',
          'respuestaIncorrecta1':'La edad de los orcos termina. El tiempo del hombre ha llegado',
          'respuestaIncorrecta2':'¡Malditos sean los hombres!',
          'respuestaIncorrecta3':'No habrá paz para Gondor'
      }
      ,
      {
          'id': '100',
          'pregunta':'¿Que libros dejó J.R.R. Tolkien a medio terminar que publicó su hijo Cristopher Tolkien?', 
          'imagen':require('./Data/images/100.jpg'), 
          'respuestaCorrecta':'el Silmarillion y los Hijos de Húrin',
          'respuestaIncorrecta1':'el Silmarillion y el Hobbit',
          'respuestaIncorrecta2':'los Hijos de Húrin y el Hobbit',
          'respuestaIncorrecta3':'J.R.R. Tolkien no dejó ningún libro a medio terminar'
      }
    ]

    const quotes = [
        'Tu si que tienes unos auténticos ojos de elfo!'
        , 'Es correcto mi tesoro'
        , 'No te apresures a dar respuestas correctas. Incluso los más sabios pueden fallar'
        , 'Si con mi vida, o con mi muerte puedo protegerte, lo haré. Cuenta con tu respuesta correcta'
        , 'Pareces bastante inteligente para este propósito, misión, ¡cosa!…'
        , 'Esta misión te ha sido encomendada, y si tú no encuentras el camino, nadie lo hará.'
        , 'No hay término élfico, en lengua Ent o de los hombres para describir tanta inteligencia!'
        , 'Dejad lo que no sea imprescindible, viajaremos de día, dormiremos de noche, otra respuesta correcta'
        , 'Et eärello endorenna utúlien. Digooo, respuesta correcta'
        , 'El cielo se tiñe rojo, otra respuesta correcta esta noche'
        , 'No conocéis el miedo. No conocéis el dolor. Solo las respuestas correctas!'
    ]

    const [questionId, setQuestionId] = useState(1);
    const [actualQuestion, setActualQuestion] = useState();
    const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);

    useEffect(() => {
        setActualQuestion(questions.find(q => q.id === questionId.toString()));
        setQuestionId(1);
    }, [])

    const handleClickCorrectAnswer = () => {
      setQuestionId(questionId + 1);
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      Alert.alert('Respuesta Correcta!', quotes[Math.floor(Math.random() * (quotes.length - 1))]);
      setActualQuestion(questions.find(q => q.id === questionId.toString()));

      if(questionId == 101)
        finalResult();
    }

    const handleClickIncorrectAnswer = () => {
      setQuestionId(questionId + 1);
      Alert.alert('Respuesta incorrecta', `La respuesta correcta era ${actualQuestion.respuestaCorrecta}`);
      setActualQuestion(questions.find(q => q.id === questionId.toString()));
      if(questionId == 101)
        finalResult();
    }

    const finalResult = () => {
        let finalQuote = '';

        if(questionId < 20)
            finalQuote = ' Creo que prefieres Harry Potter...';
        else if(questionId < 40)
            finalQuote = ' No eres un gran fan...'
        else if(questionId < 60)
            finalQuote = ' Bueno... no está mal';
        else if(questionId < 80)
            finalQuote = ' Muy bien! sabes más de lo que creía';
        else if(questionId < 99)
            finalQuote = ' Eres un auténtico Dúnedain, bendecido con el don de la larga vida.';
        else
            finalQuote = ' Eres familiar de J. R. R. Tolkien o algo así? Excelente!!';

        Alert.alert('Has llegado hasta el final', `Has conseguido una puntuacion de ${questionId} sobre 100.${finalQuote}`, [
                {text: 'Aceptar', onPress: () => navigation.navigate('¡Hola!') },
            ]);
    }

    // https://stackoverflow.com/questions/70074470/randomly-order-elements-in-an-array-once-in-react-possibly-using-use-effect
    
    // let algo = [
    //     <><TouchableOpacity style={styles.button} onPress={handleClickCorrectAnswer}>
    //         <Text style={styles.textButton}>{actualQuestion.respuestaCorrecta}</Text>
    //     </TouchableOpacity><TouchableOpacity style={styles.button} onPress={handleClickIncorrectAnswer}>
    //             <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta1}</Text>
    //         </TouchableOpacity><TouchableOpacity style={styles.button} onPress={handleClickIncorrectAnswer}>
    //             <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta2}</Text>
    //         </TouchableOpacity><TouchableOpacity style={styles.button} onPress={handleClickIncorrectAnswer}>
    //             <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta3}</Text>
    //         </TouchableOpacity></>
    // ]
  
    return (
      <View style={styles.container}>
        {
          actualQuestion !== undefined &&
          <>
          <View style={styles.containerQuestion}>
            <Text style={styles.question} >{actualQuestion.pregunta}</Text>
            {
              questions.map((item, i) => item.id === actualQuestion.id &&
              <Image key={i} source={item.imagen} style={styles.image} />
              )
            }
          </View>
            <TouchableOpacity style={styles.button} onPress={ handleClickCorrectAnswer }>
              <Text style={styles.textButton}>{actualQuestion.respuestaCorrecta}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ handleClickIncorrectAnswer }>
              <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ handleClickIncorrectAnswer }>
              <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta2}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ handleClickIncorrectAnswer }>
              <Text style={styles.textButton}>{actualQuestion.respuestaIncorrecta3}</Text>
            </TouchableOpacity>
          </>
        }
      </View>
    )

}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3462B9' },
    containerQuestion: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 50, width: 350, height: 200, marginTop: 30, marginBottom: 10 },
    question: { fontSize: 20, fontStyle: 'italic', textAlign:'center', marginHorizontal: 20, fontWeight: 'bold' },
    image: { borderRadius: 50, marginTop: 10, width: 200, height: 200 },
    button: { backgroundColor: 'white', padding: 20, borderRadius: 50, width: 300, alignItems: 'center', marginTop: 10, marginBottom: 10},
    textButton : { color: 'black', fontStyle: 'italic', fontWeight: 'bold'}
  });

export default QuestionScreen;