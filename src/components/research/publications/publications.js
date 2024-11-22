import React, { useState } from 'react';
import '../../home/home.js'
import './publications.css'
import '../equipment/sidebar.css'
import Navbar from '../../navbar/navbar.js';
import Sidebar from '../../sidebar/sidebar.js';


const Publications = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <style>
        {`
    
.page-main{
    display: grid;
    
    grid-template-columns: auto 1fr;
    gap: 50px;
}
.imgmain{
    display: flex;
    flex-direction: row;
}
.lefts{
    display: flex;
    margin-top:50px;
    flex-direction: column;
}
.hi:hover{
    color: rgb(43, 135, 193);
}
.subr{
    margin-bottom: 200px;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}
    .year{
    width: 1731px;
    height: 35px;
    padding-left:10px;
    margin-top: 70px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
.subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 25px;
    border: 1px solid grey;
}
.subrows div{
    border-right: 1px solid grey;
    width: 200px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}

body{
    padding-top: 80px;
}

@media(max-width:367px){
.rights{
display:none;
}
.head{
position: fixed;
}
   .year{
    width: 1331px;
    height: 35px;
    padding-left:10px;
    margin-top:40px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
.subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 25px;
    border: 1px solid grey;
}
    .subrows div{
    border-right: 1px solid grey;
    width: 150px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}
}
        `}
      </style>
   <Navbar/>
    <div class="page-main">
<Sidebar/>

        <div>
            <div class="year">Research Publications:
            </div>
    <div class="subrows">
    <div>Author Names</div>
    <div>Title of the Publication</div>
    <div>Year of Publication</div>
    <div>Journal Name</div>
    <div>DOI number</div>
    <div>Name of the SRKR Author</div>
    <div>Type of Article</div>
    <div>Indexed in</div>
    </div>
    <div class="subrows">
        <div>Rapaka S.B., Markkandan R., Bhagavathula S.D., Singh J., Dhanikonda R., A. S. V. R. Sai Phani Kumar K., Reddy V.
        </div>
        <div>The Effect of Graphene Oxide on Optical, Ferroelectric, and Catalytic Properties of Protein-Encapsulated ZnSe Nanocomposite
        </div>
        <div>2024
        </div>
        <div>ECS Journal of Solid State Science and Technology
        </div>
        <div>10.1149/2162-8777/ad3673
        </div>
        <div>B. S. Diwakar (Chem)
        </div>
        <div>Journal Article
        </div>
        <div>Scopus Indexed and SCIE
        </div>
        </div><div class="subrows">
            <div>Tejaswini G., Lakshmi Kishore P., Kiran Kumar P., Lakshmi Rekha B., Bhagya Lakshmi K.
            </div>
            <div>Bio Designed ZnO Nanoparticles with Leaves of Elaeocarpus Sylvestris and Investigation of Photocatalyst for Dye Degradation and Antimicrobial applications
            </div>
            <div>2024
            </div>
            <div>Arabian Journal for Science and Engineering
            </div>
            <div>10.1007/s13369-023-07944-0
            </div>
            <div>P Lakshmi Kishore
            </div>
            <div>Journal Article
            </div>
            <div>Scopus Indexed
            </div>
            </div><div class="subrows">
                <div>Suhasini K.P., Kumar J.S., Christopher V., Naidu C.G.
                </div>
                <div>Synthesis, Characterization of New Benzopyran Pyrimidines and Study of their Solvatochromic Behaviour
                </div>
                <div>2024
                </div>
                <div>Asian Journal of Chemistry
                </div>
                <div>10.14233/ajchem.2024.30980
                </div>
                <div>J Suresh Kumar (Chem)
                </div>
                <div>Journal Article
                </div>
                <div>Scopus Indexed
                </div>
                </div><div class="subrows">
                    <div>Khadgamala N.S., Rao V.N., Apparao K., Durgarao B.V., Diwakar B.S., Rao N.K.
                    </div>
                    <div>CuI Promoted Efficient Synthesis and Antimicrobial Activity of Substituted 8, 8-Dimethyl-5-phenyl-2-(pyrazin-2-yl)-5, 7, 8, 9-tetrahydro-6H-[1, 3, 4]thiadiazolo[2, 3-b]quinazolin-6-one
                    </div>
                    <div>2024
                    </div>
                    <div>Asian Journal of Chemistry
                    </div>
                    <div>10.14233/ajchem.2024.30890
                    </div>
                    <div>B. S. Diwakar (Chem)
                    </div>
                    <div>Journal Article
                    </div>
                    <div>Scopus Indexed
                    </div>
                    </div><div class="subrows">
                        <div>Krishna K.P., Sri P.B.S., Sekhar D.C., Gupta T.V.L.N.B., Satyanarayana R.L.
                        </div>
                        <div>Excess Thermodynamic Parameters of Binary Liquid Mixtures of Dimethyl Malonate with Isomeric Xylenes at Different Temperatures
                        </div>
                        <div>2024
                        </div>
                        <div>Asian Journal of Chemistry
                        </div>
                        <div>10.14233/ajchem.2024.30806
                        </div>
                        <div>D. Chandrasekhar (Chem)
                        </div>
                        <div>Journal Article
</div>
<div>Scopus Indexed
</div>
</div>
<div class="subrows">
<div>Madugula A.K., Jagadeesh K., Varma D.B.N.S., Kadiyala K.G., Pedada S.R.A.O., Guttula R.S., Nagababu U., Rangaiah G.
</div>
<div>A New Series of Indole and Azaindole Derivatives with Oxo-dihydropyridines: Synthesis, Characterization and Cytotoxicity Studies against Breast Malignant Cell Lines
</div>
<div>2024
</div>
<div>Asian Journal of Chemistry
</div>
<div>10.14233/ajchem.2024.30317
</div>
<div>U. Nagababu(Chem)
</div>
<div>Journal Article
</div>
<div>Scopus Indexed
</div>
</div>
<div class="subrows">
<div>Purushothaman S., Kavitha C., Bhavani P., Tamizhdurai P., Mangesh V.L., Kumaran R., Augustine T., Siva Kumar N., Basivi P.K., Al-Fatesh A.S.
</div>
<div>Selective oxidation of veratryl alcohol to veratraldehyde using more active catalyst in a continuous reactor
</div>
<div>2024
</div>
<div>Journal of Saudi Chemical Society
</div>
<div>10.1016/j.jscs.2023.101804
</div>
<div>P.Bhavani(Chem)
</div>
<div>Journal Article
</div>
<div>Scopus Indexed
</div>
</div>
<div class="subrows">
    <div>Prathap K., Lakshman S., Lakshmi M.V., Durgarao B.V., Sirisha D.V.L., Krishnarao N.
    </div>
    <div>Facile and an efficient one-pot synthesis of 2-arylbenzoxazoles promoted by transition metal oxide nano catalyst
    </div>
    <div>2024
    </div>
    <div>Journal of Physics: Conference Series
    </div>
    <div>10.1088/1742-6596/2765/1/012021
    </div>
    <div>U.V.Lakshmi(Chem)
    </div>
    <div>Conference paper
    </div>
    <div>Scopus Indexed
    </div>
    </div>
    <div class="subrows">
        <div>Madhavi B., Prameeladevi S., Annapurna N., Padma M.
        </div>
        <div>Biogenic Synthesis of Magnetite Nanoparticles using the Roots of Mirabilis Jalapa for Efficient Removal of Eluent, Anti-Bacterial, and Antioxidant: A Sustainable Approach.
        </div>
        <div>2024
        </div>
        <div>Journal of Physics: Conference Series
        </div>
        <div>10.1088/1742-6596/2765/1/012004
        </div>
        <div>S.Prameela Devi(Chem)
        </div>
        <div>Conference paper
        </div>
        <div>Scopus Indexed
        </div>
        </div>
        <div class="subrows">
            <div>Raghupathi Raju M.V., Vijaya Kumar N., Tulasi Bhavani K., Subramani K., Rama Swamy G., Prameela Devi S., Tirumala Rao B., Lakshmi Kanth G.V.
            </div>
            <div>The study of rate constants of redox reactions on cobalt (III) complexes of Î±-hydroxy acids with quinolinium chlorochromate (QCC) in micellar medium
            </div>
            <div>2024
            </div>
            <div>Journal of Physics: Conference Series
            </div>
            <div>10.1088/1742-6596/2765/1/012008
            </div>
            <div>K.Tulasi Bhavani (Chem) 
            </div>
            <div>Conference paper
            </div>
            <div>Scopus Indexed
            </div>
            </div>
            <div class="subrows">
                <div>Ali A., Kim H., Torati S.R., Kang Y., Reddy V., Kim K., Yoon J., Lim B., Kim C.
                </div>
                <div>Magnetic Lateral Ladder for Unidirectional Transport of Microrobots: Design Principles and Potential Applications of Cells-on-Chip
                </div>
                <div>2024
                </div>
                <div>Small
                </div>
                <div>10.1002/smll.202305528
                </div>
                <div>Venu Reddy (Chem)
                </div>
                <div>Journal Article
                </div>
                <div>Scopus Indexed and SCIE
                </div>
                </div>
                <div class="subrows">
                    <div>Lakshman S., Srinivasa Rao N., Kadgamala S., Durgarao B.V., Krishnarao N., Diwakar B.S.
                    </div>
                    <div>TiO2nanoparticles as reusable catalysts for the efficient synthesis of 2, 4, 5-trisubstituted-1H-imidazoles
                    </div>
                    <div>2024
                    </div>
                    <div>Journal of Physics: Conference Series
                    </div>
                    <div>10.1088/1742-6596/2765/1/012026
                    </div>
                    <div>B. S. Diwakar (Chem)
                    </div>
                    <div>Conference paper
                    </div>
                    <div>Scopus Indexed
                    </div>
                    </div>
                    <div class="subrows">
                        <div>Deenakonda M., Inti V.V.V., Swamy G.R., Lavanya M., Bhavani P., Rao B.T.
                        </div>
                        <div>Comparative Analysis of PWM Methods for Three Level Neutral Point Clamped Inverter
                        </div>
                        <div>2024
                        </div>
                        <div>Lecture Notes of the Institute for Computer Sciences, Social-Informatics and Telecommunications Engineering, LNICST
                        </div>
                        <div>10.1007/978-3-031-48891-7_7
                        </div>
                        <div>P.Bhavani(Chem)
                        </div>
                        <div>Conference paper
                        </div>
                        <div>Scopus Indexed
                        </div>
                        </div>
                        <div class="subrows">
                            <div>B.V.Durgarao., D.V.L.Sirisha, K.Apparao, V.Narasingrao, K.Bala Geeta., N.Narasimha Rao
                            </div>
                            <div>An efficient one pot synthesis of 6H-indolo[2,3-b]quinoxalines promoted by palladium catalyst
                            </div>
                            <div>2024
                            </div>
                            <div>Asian Journal of Chemistry
                            </div>
                            <div></div>
                            <div>K.Balageetha (Chem)
                            </div>
                            <div>Journal Article
                            </div>
                            <div>Accepted
                            </div>
                            </div>
                            <div class="subrows">
                                <div>Potnuru J., Attada T., Tatavarti B.K., Lakshmi V.M., Anna V.R.
                                </div>
                                <div>Development of sensitive stability indicating HPLC method for quantification of process related impurities of Fluphenazine; LCâ€“MS/MS elucidation of their degradation products and degradation pathway
                                </div>
                                <div>2024
                                </div>
                                <div>Research Journal of Chemistry and Environment
                                </div>
                                <div>10.25303/285rjce013023
                                </div>
                                <div>U V Lakshmi (Chem)
                                </div>
                                <div>Journal Article
                                </div>
                                <div>Scopus Indexed
                                </div>
                                </div>
                                <div class="subrows">
                                    <div>Diwakar B.S., Rajeswari D., Singh J., Haritha P., Srinivasa Rao S., Swaminadham V., Rao B.T., Reddy V.
                                    </div>
                                    <div>Carboxymethyl Cellouse Stabilized Cobalt Sulfide Nanoparticles: Preparation, Characterization and Application
                                    </div>
                                    <div>2023
                                    </div>
                                    <div>Journal of Cluster Science
                                    </div>
                                    <div>10.1007/s10876-022-02394-4
                                    </div>
                                    <div>B. S. Diwakar (Chem)
                                    </div>
                                    <div>Journal Article
                                    </div>
                                    <div>Scopus Indexed and SCIE
                                    </div>
                                    </div>
                                    <div class="subrows">
                                        <div>Adilakshmi B., Rohini V.K., Eswarlal T., Prasanna Ch.L., Anna V.R.
                                        </div>
                                        <div>Optimization of Stability-Indicating HPLC Method for Analyzing Process Related Impurities of Penfluridol and Structural Elucidation of Stress Degradation Products by LCMS/MS
                                        </div>
                                        <div>2023
                                        </div>
                                        <div>Toxicology International
                                        </div>
                                        <div>10.18311/ti/2023/v30i4/34033
                                        </div>
                                        <div>Ch.L. Prasanna(Chem)
                                        </div>
                                        <div>Journal Article
                                        </div>
                                        <div>Scopus Indexed
                                        </div>
                                        </div>
                                        <div class="subrows">
                                            <div>Nagababu U., Sujatha D., Jyothi U., Vissa M.R., Srinivasa Kumar B.
                                            </div>
                                            <div>Validated Stability Indicating HPLC Method for the Quantification of Process Related Impurities of Ubrogepant in Pharmaceutical Formulations
                                            </div>
                                            <div>2023
                                            </div>
                                            <div>Eurasian Journal of Chemistry
                                            </div>
                                            <div>10.31489/2959-0663/1-23-7
                                            </div>
                                            <div>U.Nagababu(Chem)
                                            </div>
                                            <div>Journal Article
                                            </div>
                                            <div>WoS Indexed
                                            </div>
                                            </div>
                                            <div class="subrows">
                                                <div>Bondili Sesharamsingh, J. Suresh Kumar, I.V. Kasi Viswanath, Gattupalli subhakara rao and venkateswara rao Anna
                                                </div>
                                                <div>Development of Stability-indicating HPLC method for quantification of pharmacopeia impurities of Zuclopenthixol and characterization of its stress degradation products by LCMS/MS
                                                </div>
                                                <div>2023
                                                </div>
                                                <div>Future Journal of Pharmaceutical sciences
                                                </div>
                                                <div>10.1186/s43094-023-00554-5
                                                </div>
                                                <div>J. Suresh Kumar (Chem)
                                                </div>
                                                <div>Journal Article
                                                </div>
                                                <div>WoS Indexed
                                                </div>
                                                </div>
                                                <div class="subrows">
                                                    <div>Harish J., Kumar B.S., Babu U.N., Rao G.S., Anna V.R.
                                                    </div>
                                                    <div>Development and Application of a Validated HPLC Method for the Determination of Alpelisib and its Process-Related Impurities in Pure Drug and Pharmaceutical Formulations
                                                    </div>
                                                    <div>2023
                                                    </div>
                                                    <div>Toxicology International
                                                    </div>
                                                    <div>10.18311/ti/2023/v30i3/33573
                                                    </div>
                                                    <div>U. Nagababu(Chem)
                                                    </div>
                                                    <div>Journal Article
                                                    </div>
                                                    <div>Scopus Indexed
                                                    </div>
                                                    </div>
                                                    <div class="subrows">
                                                        <div>S. Srinivasa Rao , K. Chaitanya Kumar, S. Roopas Kiran, B.S. Diwakar
                                                        </div>
                                                        <div>Protective behaviour of two phosphonate-based inhibitor systems containing lactobionic acid in corrosion control of carbon steel
                                                        </div>
                                                        <div>2022
                                                        </div>
                                                        <div>Materials Today: Proceedings
                                                        </div>
                                                        <div>https://www.sciencedirect.com/science/article/pii/S2214785321034349
                                                        </div>
                                                        <div>B. S. Diwakar (Chem)
                                                        </div>
                                                        <div>Conference paper
                                                        </div>
                                                        <div>Scopus Indexed
                                                        </div>
                                                        </div>
                                                        <div class="subrows">
                                                            <div>Lalitha Ammadu Kolahalam; Bhagavatula S Diwakar; Ivaturi Kasi Viswanath; Reddy Venu; N. Krishna Jyothi; Jaya Singh
                                                            </div>
                                                            <div>Influence of Silver and Copper Substitution on Structural, Dielectric, Magnetic, and Catalytic Properties of Nano-Lanthanum Ferrites
                                                            </div>
                                                            <div>2022
                                                            </div>
                                                            <div>Journal of Nanostructures
                                                            </div>
                                                            <div>https://jns.kashanu.ac.ir/?_action=article&au=778780&_au=Bhagavatula++S+Diwakar
                                                            </div>
                                                            <div>B. S. Diwakar (Chem)
                                                            </div>
                                                            <div>Journal Article
                                                            </div>
                                                            <div>Scopus Indexed and SCIE
                                                            </div>
                                                            </div>
                                                            <div class="subrows">
                                                                <div>Narayanam Phani Satyanarayana Acharyulu, Arya Sohan, Pravallika Banoth, Srinivasu Chintalapati, Sejal Doshi, Venu Reddy, Chella Santhosh, Andrews Nirmala Grace, Luis De Los Santos Valladares, Pratap Kollu
                                                                </div>
                                                                <div>Effect of the Graphene- Ni/NiFe2O4 Composite on Bacterial Inhibition Mediated by Protein Degradation
                                                                </div>
                                                                <div>2022
                                                                </div>
                                                                <div>ACS omega
                                                                </div>
                                                                <div>https://doi.org/10.1021/acsomega.2c02064
                                                                </div>
                                                                <div>Venu Reddy (Chem)
                                                                </div>
                                                                <div>Journal Article
                                                                </div>
                                                                <div>Scopus Indexed and SCIE
                                                                </div>
                                                                </div>
                                                                <div class="subrows">
                                                                    <div>Kishore et.al.,
                                                                    </div>
                                                                    <div>A comprehensive review on green synthetic 
                                                                        approaches and applications of 3d series metal 
                                                                        oxide nanoparticles
                                                                        </div>
                                                                    <div>2022
                                                                    </div>
                                                                    <div>Asian journal of Chemistry
                                                                    </div>
                                                                    <div>https://doi.org/10.14233/ajchem.2022.23904
                                                                    </div>
                                                                    <div>P.Lakshmi Kishore
                                                                    </div>
                                                                    <div>Journal Article
                                                                    </div>
                                                                    <div>Scopus Indexed 
                                                                    </div>
                                                                    </div>
                                                            <div class="subrows">
                                                                <div>Raghu Babu K, Jeevan Kumar J., Suseela Bai G., Jay Singh, Venu Reddy
                                                                </div>
                                                                <div>Carboxymethyl cellulose stabilized lead sulﬁde nanocrystals: Synthesis, characterization and catalytic applications
                                                                </div>
                                                                <div>2021
                                                                </div>
                                                                <div>Colloids and Surfaces A: Physicochemical and Engineering Aspects
                                                                </div>
                                                                <div>https://doi.org/10.1016/j.colsurfa.2021.126572
                                                                </div>
                                                                <div>Venu Reddy (Chem)
                                                                </div>
                                                                <div>Journal Article
                                                                </div>
                                                                <div>Scopus Indexed and SCIE
                                                                </div>
                                                                </div>
                                                                <div class="subrows">
                                                                    <div>Venu Reddy, Sri RamuluTorati, Rajeswari Dhanikonda, Sudha Mohan,  Reddy Sattie, SanjayBandi
                                                                    </div>
                                                                    <div>Facile and scalable preparation of bovine serum albumin stabilized cobalt sulfide nanostructures with various morphologies
                                                                    </div>
                                                                    <div>2021
                                                                    </div>
                                                                    <div>Colloid and Interface Science Communications
                                                                    </div>
                                                                    <div>https://doi.org/10.1016/j.colcom.2021.100403
                                                                    </div>
                                                                    <div>Venu Reddy (Chem)
                                                                    </div>
                                                                    <div>Journal Article
                                                                    </div>
                                                                    <div>Scopus Indexed and SCIE
                                                                    </div>
                                                                    </div>
                                                                    <div class="subrows">
                                                                        <div>D. Chandra Sekhar et.al.
                                                                        </div>
                                                                        <div>Preparation of Graphene from Graphene oxide by Chemical Reducing Agents
                                                                        </div>
                                                                        <div>2021
                                                                        </div>
                                                                        <div>Caribbean Journal of Science and Technology
                                                                        </div>
                                                                        <div> https://doi.org/10.55434/CBI.2021.9109 
                                                                        </div>
                                                                        <div>D. Chandrasekhar (Chem)
                                                                        </div>
                                                                        <div>Journal Article
                                                                        </div>
                                                                        <div>Scopus Indexed and SCIE
                                                                        </div>
                                                                        </div>
                                            
                            
        </div>
</div>
    </div>
  )
}

export default Publications