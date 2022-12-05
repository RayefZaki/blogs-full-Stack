
import './App.css';
import Nav from './componets/Nav.js';
import Footer from './componets/Footer';
import Cards from './componets/Cards';

function App() {
  return (
    <>
 <Nav></Nav>
 <div className='Card'>
 <Cards Name = "JavaScript Essentials 1" Description = "تعلّم أساسيات JavaScript وبرمجة الكمبيوتر من البداية!" Expiry = "20"Img ="https://files.bootcamp.sa/8fb8a053-432d-40a1-8179-176051ca23c4/logo/053d6071-e12e-4e92-9b9d-038c966b6c8c.png"/>
 <Cards Name = "PCAP: Programming Essentials In Python" Description = "تعلُّم البرمجة من نقطة الصفر وإتقان لغة Python." Expiry = "14"Img ="https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/b8497526-2eb3-4e79-a8ad-a0a006816623.png"/>
 <Cards Name = "Get Connected" Description = "تعلم مهارات الكمبيوتر الأساسية مثل استخدام وسائل التواصل الاجتماعي وتصفح الإنترنت والمفهوم المبسط" Expiry = "8"Img ="https://thumbs.dreamstime.com/b/electric-plug-connect-concept-socket-get-connected-disconnect-vector-power-cable-illustration-167567690.jpg"/>
 <Cards Name = "Networking Essentials" Description = "تعرّف على  مفاهيم ومهارات الشبكات الأساسية التي يمكنك استخدامها على الفور" Expiry = "31"Img ="https://res.cloudinary.com/go1/image/upload/v1572407744/sndbfcditcrotxetjrql.png"/>
 <Cards Name = "CyberOps Associate" Description = "تمكّن من تنمية الخبرة اللازمة لمراقبة التهديدات المتعلقة بالأمن السيبراني واكتشافها والاستجابة له" Expiry = "29"Img ="https://www.ipcert.it/images/articoli/certificazioni-industriali/CyberOps-Associate.png"/>
 <Cards Name = "Cloud Security" Description = "تعلّم كيفية تصميم بيئة أعمال سحابية آمنة وبنائها والحفاظ عليها." Expiry = "3"Img ="https://cdn2.vectorstock.com/i/1000x1000/36/76/cloud-security-vector-3953676.jpg"/>
 </div>

 <Footer></Footer>
 
</>
  );
}

export default App;
