import { Component } from '@angular/core';
import { CandidateItemComponent } from '../../components/candidate-item/candidate-item.component';

export class Candidate {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

export class CandidateComponent {
  candidates = CANDIDATES;
  currentCandidate: Candidate;

  showCandidate(item) {
    this.currentCandidate = item;
  }
}

var CANDIDATES: Candidate[] = [
{
  "name": "Kenneth Lonergan",
  "shortname": "Ingénieur DEVOPS",
  "reknown": "94210 LA VARENNE-SAINT-HILAIRE ",
  "bio": "Ingénieur en Informatique et Management de projet de formation, j'ai occupé plusieurs fonctions, J'effectue actuellement une mission d'Ingénieur DEVOPS/SRE et Responsable de plateformes d’Intégration Continue chez le client Orange SA en qualité de consultant pour le compte d'Altran Technologies. Véritable passionné et curieux insatiable, je suis en veille technologique permanente et je me forme de façon autodidacte aux nouveaux mouvements apparaissant dans le domaine des Nouvelles Technologies de l'Information et de la Communication. Je tente d'animer à mes temps perdus mon blog Sublimigeek.fr pour partager mes découvertes, mes coups de cœur et astuces"
}, {
  "name": "Eleanor Du Trieux",
  "shortname": "Ingénieur Système Réseau",
  "reknown": "59430 SAINT-POL-SUR-MER",
  "bio": "Je suis quelqu’un de dynamique, entrepreneur, rigoureux, organisé, et qui a l’habitude de travailler en équipe. Enfin, j'ai décidé d'axer ma formation vers les technologies CISCO depuis le début de ma formation"
}, {
  "name": "Bill Nighy",
  "shortname": "Ingénieur Système Linux",
  "reknown": "59800 LILLE ",
  "bio": "Des études en Développement Web au Cégep de Trois-Rivières (Québec) m'ont préparé aux différents métiers du Web. Mon expérience en agence m’a ensuite permis de me spécialiser dans le développement Front-End. De retour sur Paris depuis début 2015, je travaille chez Neolynk (SSII) en tant que consultant développeur web Front-End."
}, {
  "name": "Hélène Bellefeuille",
  "shortname": "Data Scientist",
  "reknown": "47000 AGEN",
  "bio": "Master's student in computer science and applied mathematics."
}, {
  "name": "Henri Dodier",
  "shortname": "Développeur Front-End",
  "reknown": "83000 TOULON ",
  "bio": "Développeur Front End (CSS, JS, RDW…)"
}, {
  "name": "Carolos Simard",
  "shortname": "Dévelopeur backend",
  "reknown": "13008 MARSEILLE ",
  "bio": "I feel proud for choosing the IT sector as an area of interest since we find ourselves in the golden age of Computer Science. I always congratulate myself on my luck that I have experienced through my studies and my career.."
}, {
  "name": "Clémence Dodier",
  "shortname": "Intégrateure web",
  "reknown": "44120 VERTOU",
  "bio": "Je suis passionnée du web depuis que je suis toute petite. Durant mon parcours, j’ai appris le responsive web design, à faire des maquettes web, le HTML5, CSS3, Javascript, JQuery, PHP, création de vidéos, animation et bien plus encore. Aussi, je suis en mesure de réaliser un design intégré dans WordPress ou bolt."
}, {
  "name": "Manville Forest",
  "shortname": "Analyste Fonctionnel",
  "reknown": "75012 PARIS ",
  "bio": "En poste AAA, je fais de l'analyse fonctionnelle sur des solutions logicielles pour des compagnies aériennes du monde entier. Des tâches très variées me sont confiées et celles-ci me permettent de développer mes compétences en management de projets, en analyse de systèmes complexes et en esprit de synthèse. D'autre part, je pratique l'anglais au quotidien, aussi bien à l'écrit qu'à l'oral."
}, {
  "name": "Cheney Chaloux",
  "shortname": "Chef de projet SI/Applicatifs ",
  "reknown": "13100 AIX-EN-PROVENCE ",
  "bio": "Je travaille sur le déploiement de l'application Hôpital Manager.J'ai commencé par déployer cette solution dans plusieurs cliniques de la Générale de Santé. Le périmètre de déploiement concernait le circuit du médicament. Actuellement, je déploie le logiciel sur plusieurs sites privé/public MCO/SSR/PSY. Le périmètre de déploiement est plus large : CBUM, Dossier de soins, Dossier de spécialité (kiné, ergo, APA, psychologue etc..), Agenda, Bureautique, Examens de biologie."
}
]