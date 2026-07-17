/* ======================================================== 
  The Counselor's Compendium - behavior
  You fill the datas section by hand. The machinery below
  renders and drives whatever you put there.
 ========================================================*/
document.addEventListener("DOMContentLoaded", function() {
  
const conditions = [
  /* ============================================================
   CONDITIONS — 24 highlighted + complete entries
   Transcribed from EveryGene_Flashcards__101_Conditions.xlsx
   (Sheet1, rows noted per object)

   PASTE THESE INSIDE the conditions array, ABOVE the ];
   Replace your existing 22q11.2 object — it is included here.

   Text is verbatim from the sheet. The ONLY changes are HTML
   escapes so the characters survive innerHTML rendering:
      &  ->  &amp;      (5 cells)
      >  ->  &gt;       (6 cells)
      <  ->  &lt;       (1 cell)
      "  ->  \"         (1 cell — JS string delimiter)
   These render on the page as the original characters.
   ============================================================ */



  /* row 2 */
  {
    conditionName: "22q11.2 del syndrome (DiGeorge or Velocardiofacial syndrome)",
    diseaseCategory: "Microdel/dup",
    gene: "TBX1",
    inheritance: "AD",
    majorClinicalFeatures: "Palatal defects, cardiac defects, hypocalcemia, immunodeficiency due to thymic hypoplasia, psychiatric illness i.e. ASD/Schizophrenia",
    otherClinicalFeatures: "Short stature, hypertelorism, low set ears, micrognathia, learning differences, hearing/vision issues, renal changes, seizures",
    mechanismPathophysiology: "2.54 Mb del; de novo in 90%",
    diagnosis: "<strong>CMA</strong>, Karyotype, FISH",
    majorWorkUp: "Echo, Ca+2 serum, thyroid function test",
    otherWorkUp: "EKG, spine radiographs, renal ultrasound, CBC with differential, parathyroid hormone; Eval by ophthalmology, audiology, immunology, ENT",
    management: "Feeding therapy, Developmental services, surgical repair of cardiac/palatal changes, PRN Ca+2 supplement",
    clinicalPearl: "CATCH22: Cardiac changes, Abnormal facies, Thymic hypoplasia, Cleft palate, Hypocalcemia, 22q.11del",
    notes: "TBX1 is the deleted gene responsible for cardiac symptoms",
    terminologyToKnow: "Codominance: two different alleles are both fully expressed in an individual's phenotype i.e. Alpha-1 Antitrypsin Deficiency"
  },

  /* row 3 */
  {
    conditionName: "Achondroplasia",
    diseaseCategory: "Musculoskeletal",
    gene: "FGFR3",
    inheritance: "AD",
    majorClinicalFeatures: "Short-limb dwarfism",
    otherClinicalFeatures: "Frontal bossing, midface hypoplasia, trident hands, lumbar lordosis, genu varum, normal intelligence, narrow craniocervical junction",
    mechanismPathophysiology: "GOF mutation of FGFR-3 acting as a negative regulator of bone growth",
    diagnosis: "Clinical/radiographic findings",
    majorWorkUp: "MRI (preferred) or CT of brain and craniocervical junction",
    otherWorkUp: "N/A",
    management: "Vosoritide (c-type natriuretic peptide analog) increases hight from birth until closure of growth plate",
    clinicalPearl: "Progressive narrowing of craniocervical junction can cause central apnea by dmging respiratory control centers",
    notes: "Risk factor includes increased pat age for de novo variants",
    terminologyToKnow: "hypertelorism: abnormally large space between eyes"
  },

  /* row 5 */
  {
    conditionName: "Alagille syndrome",
    diseaseCategory: "General",
    gene: "JAG1/NOTCH2",
    inheritance: "AD",
    majorClinicalFeatures: "Bile duct paucity, butterfly vertebrae, triangular shaped face",
    otherClinicalFeatures: "Infantile liver disease, cholestasis, cardiac defects, posterior embryotoxon, broad forehead, pointed chin, deep set eyes, hypertelorism",
    mechanismPathophysiology: "Haploinsufficiency; 94% cases due to PVs in JAG1",
    diagnosis: "Clinically and/or molecularly",
    majorWorkUp: "Bilirubin studies for conjugated hyperbilirubinemia",
    otherWorkUp: "Liver functionstudies, echo, eye exam, chest xray, renal studies with ultrasound",
    management: "Ileal bile acid transporter inhibitors such as maralixabat and odevixibat to increase bile acid excretion; liver transplant in severe cases; additional therapy as indicated by clinical picture",
    clinicalPearl: "Most common cardiac defect is peripheral pulmonary artery stenosis &amp; branches",
    notes: "Almost completely penetrant with high variable expressivity",
    terminologyToKnow: "posterior embryotoxon: congenital defect of grey ring around iris thickens and position weird"
  },

  /* row 7 */
  {
    conditionName: "Alpha Thalassemia",
    diseaseCategory: "Blood/Immune Disorders",
    gene: "HBA1/HBA2",
    inheritance: "AR",
    majorClinicalFeatures: "HB Bart syndrome (4 dels): Hydrops fetalis, severe anemia, hepatosplenomegaly, early death; HbH disease (3 dels): Splenomegaly, mild jaundice, gallstones, frontal bossing",
    otherClinicalFeatures: "N/A",
    mechanismPathophysiology: "Abnormal/absent alpha-globin chains leading to hemolysis and impared erythropoiesis",
    diagnosis: "Established clinically, molecularly confirmed",
    majorWorkUp: "Microcytic anemia",
    otherWorkUp: "Reticulocytosis; 4 gamma globin chains for Hb Barts &amp; 4 beta globin chains for HbH disease",
    management: "Dependent on severity; Hb Bart = neonatal death and HbH may require occasional RBC transfusion",
    clinicalPearl: "People with HbH need to be monitored for a hemolytic/aplastic crisis during febrile episodes",
    notes: "Bart is 4 letters = 4 alpha globin affected; HbH is 3 letters = 3 alpha globin affected",
    terminologyToKnow: ""
  },

  /* row 9 */
  {
    conditionName: "Angelman syndrome",
    diseaseCategory: "Imprinting DIsorders",
    gene: "15q11.2-q13/UBE3A",
    inheritance: "N/A",
    majorClinicalFeatures: "Developmental differences, pathologic happiness, light colored hair",
    otherClinicalFeatures: "Ataxia, abnormal food-related behaviors, seizures, scoliosis, obesity, wide mouth, protruding tongue, hypopigmented skin",
    mechanismPathophysiology: "Mat 15q11.2-q13 del, parternal UPD15q, maternal imprenting defect of 15q11.2-q13, UBE3A PV",
    diagnosis: "DNA methylation testing; MLPA, CMA, UPD analysis, UBE3A sequencing",
    majorWorkUp: "Brian MRI, EEG",
    otherWorkUp: "Eval by feeding/nutrition, ophthalmology, PT, &amp; neurology",
    management: "Augmentative communication devices; antiepileptics for eseizures, behavior modification, developmental therapies; monitoring of nutrition to prevent obesity",
    clinicalPearl: "&gt;10% of cases are caused by PV in UBE3A",
    notes: "OCA2 located in 15q11.2-q13 region and has a role in pigmentary changes seen in Angelman syndrome",
    terminologyToKnow: ""
  },

  /* row 11 */
  {
    conditionName: "Bardet Biedl syndrome",
    diseaseCategory: "General",
    gene: "BBS1 (other BBS genes less common)",
    inheritance: "AR",
    majorClinicalFeatures: "Postaxial polydactyly, cone-rod dystrophy, central obesity, renal disease",
    otherClinicalFeatures: "Developmental differences, eye abnormalities, hypogonadism, olfactory dysfunction, dental anomalies, genitourinary anomalies",
    mechanismPathophysiology: "Cilopathy: non-motile cilia become deranged, causing multi-system dysfunction",
    diagnosis: "Established clinically, molecularly confirmed",
    majorWorkUp: "Renal imaging, Annual ophthalmologic exam",
    otherWorkUp: "Echo, LSH, LH, estrogen, and testosterone levels if concerned for delayed puberty",
    management: "Targeted therapy for setmelanotide (melancortin-4 receptor agonsit); Surgery for cardiac/vision issues; Follow with nephrology &amp; ophthalmology",
    clinicalPearl: "&gt;50% people affected with BBS have anosmia",
    notes: "Central (truncal) obesity develops in the first year of life",
    terminologyToKnow: "Postaxial polydactyly: Extra fingers on the ulnar side of the hand/foot"
  },

  /* row 13 */
  {
    conditionName: "Beta Thalassemia",
    diseaseCategory: "Blood/Immune Disorders",
    gene: "HBB",
    inheritance: "AR",
    majorClinicalFeatures: "Beta thal major: Early childhood as severe anemia; Beta thal intermedia: milder phenotype",
    otherClinicalFeatures: "Beta thal major: pallor, poor growth, jaundice, hepatosplenomegaly; Beta thal intermedia: mild anemia, jaundice, seletal changes, leg ulcers, pulmonary hypertension",
    mechanismPathophysiology: "Absent/reduced synthesis of beta hemoglobin",
    diagnosis: "Established clinically or molecularly",
    majorWorkUp: "Hemoglobin electrophoresis: reduced/absent alpha hemoglobin, increased alpha-2 hemoglobin, increased hemoglobin fetalis; CBC = microcytic anemia &amp; blood smear shows anisopoikilocytosis with nucleated red blood cells",
    otherWorkUp: "N/A",
    management: "May require red blood cell transfusions with iron chelation therapy, anticoagulation, cholecystectomy for biliary colic, folic acid supplementation, treatment for osteoporosis",
    clinicalPearl: "Clinical severity depends on variant effect on each HBB gene. Beta-0 variants have absent beta hemoglobin production with beta-positive variant have reduced beta hemoglobin production",
    notes: "Gene therapy availble for people with transfusion-dependent beta thal",
    terminologyToKnow: "pallor:"
  },

  /* row 16 */
  {
    conditionName: "Canavan disease",
    diseaseCategory: "Neuro",
    gene: "ASPA",
    inheritance: "AR",
    majorClinicalFeatures: "Early infancy onset of hypotonia, leuukodystrophy, seizures",
    otherClinicalFeatures: "Hyperextension of legs/flexion of arms, blindness, macrocephaly, severe developmental delays, regression, death before adulthood",
    mechanismPathophysiology: "Deficiency of aspartoacylase leads to accumulation of N-acetylaspartic acid (NAA) in the brain",
    diagnosis: "Clinical findings, elevated NAA in urine, molecular testing",
    majorWorkUp: "Brain MRI/MRS, urine NAA testing",
    otherWorkUp: "Evals by rehab, neurology, ophthalmology, nutrition",
    management: "Multidisciplinary care, antiepileptics",
    clinicalPearl: "Atypical Canavan disease has mildly elevated urine NAA (~10-fold) compared to classic Canavan where urine NAA is extremely elevated (~100-fold)",
    notes: "Neurodevelopmental impairment becomes evident by ages 3-5mo in classic Canavan disease",
    terminologyToKnow: "Magnetic Resonance Spectroscopy (MRS): Biochemical MRI where they are looking for metabolite concentrations (without needing contrast)"
  },

  /* row 18 */
  {
    conditionName: "Charcot Marie Tooth syndrome",
    diseaseCategory: "Neuro",
    gene: "PMP22",
    inheritance: "X-Linked, AD, AR",
    majorClinicalFeatures: "Symmetric, slowly progressive distal motor neuropathy of arms/legs (weakness/muscle atrophy in hands, feet, decreased deep tendon reflexes, sensory loss), pes cavus deformity",
    otherClinicalFeatures: "N/A",
    mechanismPathophysiology: "Extremely variable, although typicaly involves genes that regulate myelin assembly and axonal transport",
    diagnosis: "PMP22 dup/del testing",
    majorWorkUp: "Nerve conduction studies",
    otherWorkUp: "Electromyography (EMG), nerve biopsy",
    management: "Treatment for neuropathy and pain",
    clinicalPearl: "CMT disease typically presents in the first 10 - 30 yrs",
    notes: "&gt; 80 different genes are associated with CMT (Locus heterogeneity)",
    terminologyToKnow: "Locus heterogeneity: Mutations in different genes can cause the same or similar phenotypic expressions of a disease (CMTD!!!!!)"
  },

  /* row 23 */
  {
    conditionName: "Classic Ehlers Danlos syndrome (cEDS)",
    diseaseCategory: "Musculoskeletal",
    gene: "COL5A1, COL5A2, COL1A1",
    inheritance: "AD",
    majorClinicalFeatures: "Skin hyperextensibility, atrophic scarring, generalized joint hypermobility, molluscoid pseudotumors, risk of prematurity",
    otherClinicalFeatures: "Soft/doughy skin, join dislocations, easy bruising, hernias, mitral valve prolapse or aortic root dilation",
    mechanismPathophysiology: "Functional haploinsufficiency of type V collagen leading to impaired connective tissue formation",
    diagnosis: "Combination of clinical exam and molecular testing",
    majorWorkUp: "Baseline echo with aortic diameter measurement, eval of clotting factors for bruising",
    otherWorkUp: "N/A",
    management: "Multidisciplinary care, physical therapy, close monitoring through pregnancy and postpartum; Avoid contact and high-impact sports i.e. soccer, football, gymnastics, track and field",
    clinicalPearl: "Beighton scale should be used to provide an objective semi-quantification measure of joint hypermobility; should NOT be used on neonates and infants",
    notes: "Classic EDS and Hypermobile EDS are NOT associted with fractures",
    terminologyToKnow: ""
  },

  /* row 25 */
  {
    conditionName: "Osteogenesis Imperfecta",
    diseaseCategory: "Musculoskeletal",
    gene: "COL1A1, COL1A2",
    inheritance: "AD",
    majorClinicalFeatures: "Fractures with minimal/no trauma, wormian bones, blue/grey sclera, dentinogenesis imperfecta",
    otherClinicalFeatures: "Hearing loss, ligamentous laxity, short stature",
    mechanismPathophysiology: "Quantitative impact on collagen type I protein: loss of function; Qualitative impact on collagen type I protein: dominant-negative effect",
    diagnosis: "Molecular testing of COL1A1 and COL1A2 along with broader testing for other types of OI",
    majorWorkUp: "Head and cervical spine imaging, hearing assessment",
    otherWorkUp: "dental exam, imaging for acute fractures as needed",
    management: "Bisphosphonates for severe cases, multidisciplinary care",
    clinicalPearl: "Classic forms of OI have four categories: Non-deforming OI with blue sclerae, perinatally letal OI, progressively deforming OI, and common variable OI with normal sclerae",
    notes: "100% penetrant with high variable expressivity; Dominant-negative missense mutations tend to cause the most severe phenotype",
    terminologyToKnow: "Wormiam bones: small, extra pieces of bone that form within the joints (sutures) or fontanelles of the skull"
  },

  /* row 27 */
  {
    conditionName: "Cri-Du-Chat syndrome",
    diseaseCategory: "Microdel/dup",
    gene: "5p del",
    inheritance: "N/A",
    majorClinicalFeatures: "High-pitched cat-like cry, microcephaly, potential cardiac defects",
    otherClinicalFeatures: "Hypertelorism, epicanthal folds, downturned corners of mouth, hypotonia; DD/ID with relative preservation of speech comprehension",
    mechanismPathophysiology: "Partial/complete deletion of 5p. Mostly de novo though 10-15% due to unbalanced parental translocation",
    diagnosis: "CMA, karyotype, FISH",
    majorWorkUp: "Echo",
    otherWorkUp: "renal ultrasound, eval by ophthalmology and audiology",
    management: "Address feeding concerns (ENT/speech therapists), Dev therapies as indicated",
    clinicalPearl: "Management revolves around enrollment in developmental therapies as early as possible",
    notes: "5p15.3 del is thought to be responsible for characteristic cry",
    terminologyToKnow: ""
  },

  /* row 29 */
  {
    conditionName: "Cystic Fibrosis (CF)",
    diseaseCategory: "General",
    gene: "CFTR",
    inheritance: "AR",
    majorClinicalFeatures: "Recurrent respiratory infections, progressive obstructive pulmonary disease with bronchiectasis, pancreatic insufficiency, meconium ileus",
    otherClinicalFeatures: "diabetes, liver disease, male infertility, short stature",
    mechanismPathophysiology: "CFTR encodes an epithelial Cl channel; Loss of function causes decreased secretion of Cl- and increased resorption of Na+ with thickened mucus secretion; process is reversed in sweat glands leading to salty sweat",
    diagnosis: "Functional (sweat chloride test ≥ 60mmol/L), NBS, molecular testing",
    majorWorkUp: "Assess fat-soluble vitamins (decreased A, D, E, K)",
    otherWorkUp: "Fecal elastase, liver and renal function tests",
    management: "CFTR modulator therapy, pancreatic enzyme replacement, Daily airway clearance with lung transplant in severe cases, Nutritional management, fat soluble vitamin supplements",
    clinicalPearl: "People with CF are a t ahigher risk for respiratory infections caused by Psudomonas aeruginosa and atypical gram-negative organisms",
    notes: "Most common PV is F508Del in CFTR (~80%) though varies by region",
    terminologyToKnow: ""
  },

  /* row 30 */
  {
    conditionName: "Down syndrome (Trisomy 21)",
    diseaseCategory: "Aneuploidies",
    gene: "47, XX/XY +21",
    inheritance: "N/A",
    majorClinicalFeatures: "Hypotonia, congenital heart defects (ASVD most common), duodenal atresia, hematologic, ocular, and endocrine changes,",
    otherClinicalFeatures: "Upslanting palpebral fissures, epicanthal folds, brushfield spots, transverse palmar crease, alveolar simplification, variable neurocognitive differences",
    mechanismPathophysiology: "Extra copy of Ch21; Isochromosome 21. Typically not inherited, robertsonian translocation 2-4% of time (w/ Ch14) in unaffected parent; 50-75% fetuses are lost before term",
    diagnosis: "Karyotype, FISH",
    majorWorkUp: "Prenatal screening: cfDNA, increased inhibin, hCG, decreased estriol, AFP",
    otherWorkUp: "Echo, EKG, CBC, thyroid screening, developmental assessment",
    management: "Early intervention referral, surgical correction of cardiac/ocular defects",
    clinicalPearl: "Patients with transient abnormal myelopoiesis in the newborn period have an increased risk of developing acute myeloid leukemia in the first four years of life",
    notes: "Most siblings of people with Down syndrome feel they are a better person bcause of their brother or sister",
    terminologyToKnow: "Isochromosome: unbalanced structural chromosome abnormality where the short arms are lost and the long arms fuse to form a mirror image"
  },

  /* row 31 */
  {
    conditionName: "Duchenne Muscular Dystrophy (DMD)",
    diseaseCategory: "Neuro",
    gene: "DMD",
    inheritance: "X-Linked",
    majorClinicalFeatures: "Gowers' sign (uses their hands and arms to \"walk\" up their own body to stand from a squatting or sitting position) in early childhood with delayed motor milestones; Males wheelchair bound by 12 and develop cardiomyopathy in adulthood",
    otherClinicalFeatures: "Females typically less affected but can develop cardiomyopathy",
    mechanismPathophysiology: "Dystrophin defects (facilitates interactions between cytoskeleton, cell membrane, extracellular matrix of muscle cells",
    diagnosis: "Molecular testing of DMD",
    majorWorkUp: "Elevanted creatine kinase (usually 10x increase), regular echos to monitor for dilated cardiomyopathy",
    otherWorkUp: "Corticosteroids, cardiomyopathy management, other supportive therapies",
    management: "Exon skipping antisense oligonucleotide (ASO) therapy",
    clinicalPearl: "Becker muscular dystrophy is also caused by mutations in DMD, though with milder symptoms since mutations are in frame (vs out of frame with DMD)",
    notes: "Without known family history, 2/3 chance than an affect person's mother is a carrier",
    terminologyToKnow: ""
  },

  /* row 33 */
  {
    conditionName: "Fabry disease",
    diseaseCategory: "Metabolic Disorders",
    gene: "GLA",
    inheritance: "X-Linked",
    majorClinicalFeatures: "Presentation varies based on alpha-gal A enzyme activity; Acroparesthesia, anhidrosis, cornea verticillata. Adulthood may have renal and cardiac disease",
    otherClinicalFeatures: "Angiokeratomas, hypohidrosis, proteinuria",
    mechanismPathophysiology: "Alpha-galactosidase deficiency (alpha-gal-A) accumulates toxic metabolites (globotriaosylceramide [Gb3] and globotriaosylsphingoside [lysoGb3]) Typical Fabry disease have &lt;1% residual enzyme activity",
    diagnosis: "Biochemical testing and/or molecular testing",
    majorWorkUp: "Echo, eye exam, elevated plasma and urine globotriaosylsphinegosine (lyso-Gb3)",
    otherWorkUp: "EKG, brain MRI, renal function studies",
    management: "Enzyme replacement therapy considered ASAP for all males with Fabry and in females with clinincal disease manefestations",
    clinicalPearl: "There is lysosomal deposition of globotriaosylceramide and its derivates in cells throughout the body",
    notes: "Heterozygous females typically have milder symptoms at a later age of onset than males",
    terminologyToKnow: "Acroparesthesia"
  },

  /* row 34 */
  {
    conditionName: "Familial Adenomatous Polyposis (FAP)",
    diseaseCategory: "Cancer",
    gene: "APC",
    inheritance: "AD",
    majorClinicalFeatures: "Colorectal cancer predisposition syndrome with many adenomatous colonic polyps starting in teenage years.",
    otherClinicalFeatures: "jaw osteomas, congenital hypertrophy of the retinal pigment epithelium (CHRPE), dental changes",
    mechanismPathophysiology: "APC = tumor supressor gene; PVs disrupt apoptosis and cause uncontrolled cell growth, allowing for adenoma development",
    diagnosis: "Molecular testing of APC",
    majorWorkUp: "Colonoscopy, thyroid ultrasound, abdominal ultrasound",
    otherWorkUp: "N/A",
    management: "Colectomy when colorectal therapy diagnosed/suspected; NSAIDs cause regression of adenomas and decrease polyp burden",
    clinicalPearl: "APC - Adenomatous Polyps causing Colorectal Cancer",
    notes: "Colorectal cancer typically onsets by 40yo if untreated",
    terminologyToKnow: ""
  },

  /* row 35 */
  {
    conditionName: "Fragile X syndrome (FXS)",
    diseaseCategory: "Repeat Disorders",
    gene: "FMR1",
    inheritance: "X-Linked (CGG repeat)",
    majorClinicalFeatures: "ASD, macroorchidism, large ears, connective tissue changes",
    otherClinicalFeatures: "Developmental differences, long face, prominent forehead, prominent jaw",
    mechanismPathophysiology: "CGG trinucleotide repeat expansion in 5' UTR of FMR1 with &gt;200 CGG repeats = hypermethylation of 5' UTR silencing FMR1. Premutation (50 - 200) can expand in the next generation when MATERNALLY inherited",
    diagnosis: "FMR1 PCR testing/southern blot",
    majorWorkUp: "Developmental, neuropsych, ophthalmology, ENT, and cardiology evals with baseline echo",
    otherWorkUp: "N/A",
    management: "Supportive and symptom based therapy with early educational intervention. Avoid/start low dose of psychotrophic medications",
    clinicalPearl: "Inidivduals with FX premutation are at risk for Fragile X associated premature ovarian insufficiency (FXPOI -Female) or Fragile X assocated tremor/ataxia syndrome (FXTAS- Male)",
    notes: "AGG interruptions within CGG repeat segement reduce risk of developing full mutation",
    terminologyToKnow: "macroorchidism: abnormally large testicles"
  },

  /* row 36 */
  {
    conditionName: "Friedreich Ataxia",
    diseaseCategory: "Repeat Disorders",
    gene: "FXN",
    inheritance: "AR (GAA repeat)",
    majorClinicalFeatures: "Slowly progressive ataxia, dysarthria, scoliosis, spasticity, bladder dysfunction, Pes cavus, Cardiomyopathy, diabetes; onset before 25yo",
    otherClinicalFeatures: "Absent lower limb reflexes and loss of position/vibratory sense",
    mechanismPathophysiology: "Gaa repeat expansion in intron 1 of BOTH COPIES of FXN = hypermethylation and decreased gene transcription. Can have compound heterozygosity for repeat expansion and LOF PVs; Premutation = 34 - 43, Borderline = 44 - 65, &gt;66 = full penetrance",
    diagnosis: "FXN PRC testing, +/- sequence analysis",
    majorWorkUp: "Annual EKG and echo, Hb1AC",
    otherWorkUp: "Neurology and rehab eval, Xray for scoliosis",
    management: "Prosthetics/walking aids/wheelchair, treat cardiac complications, diabetes, sleep apnea; Baclofen and botox for spasticity and bladder dysfunction; Omaveloxolone approved treatment for Friedreich ataxia",
    clinicalPearl: "Late or very late onset disease occurs in ~15% of patients &gt;26 - 40yo. Patients tend to have shorter repeats and may have retained reflexes",
    notes: "Anticipation is typically not seen as this condition is inherited in an autosomal recessive manner",
    terminologyToKnow: ""
  },

  /* row 37 */
  {
    conditionName: "Classic Galactosemia",
    diseaseCategory: "Metabolic Disorders",
    gene: "GALT",
    inheritance: "AR",
    majorClinicalFeatures: "within a few days of starting breastmilk or formula neonates will have hepatic, renal and cerebral disease and poor feeding; Cataracts common outside of neonatal period",
    otherClinicalFeatures: "Vomitting, diarrhea, jaundice, coagulopathy, weight loss, lethargy",
    mechanismPathophysiology: "GALT enzyme, catalyzes the conversion of the molecules galactose-1- phosphate and UDP-glucose to UDP-galactose and glucose–1–P. With deficient GALT enzyme activity galactose-1-phosphate, galactose, and galactitol accumulate.",
    diagnosis: "Erythrocyte GALT enzyme activity, molecular sequencing of GALT; Tested on NBS in all 50 states",
    majorWorkUp: "Baseline erythrocyte galactose-1-phosphate concentration and urinary galactitol",
    otherWorkUp: "N/A",
    management: "Excluse of lactose from diet; Soy-based formula can be used",
    clinicalPearl: "Hypergonadotropic hypogonadism or Primary ovarian insufficiency (POI) occurs in almost all females with classic galactosemia",
    notes: "Increased susceptibility to death from E.Coli Septicemia during neonetal period",
    terminologyToKnow: ""
  },

  /* row 38 */
  {
    conditionName: "Gaucher Disease Type I",
    diseaseCategory: "Metabolic Disorders",
    gene: "GBA1",
    inheritance: "AR",
    majorClinicalFeatures: "Hepatosplenomegaly, thrombocytopenia, anemia, subcapsular splenic infarctions, osteopenia",
    otherClinicalFeatures: "Lung disease, medullary infarction of long bones, aseptic necrosis of the femoral head",
    mechanismPathophysiology: "Deficient glucocerebrosidase activity causing accumulation of glucosylceraide and other glycolipids",
    diagnosis: "Decreased glucosyceramidase activity and/or molecular testing",
    majorWorkUp: "DEXA scan",
    otherWorkUp: "Skeletal x-rays, abdominal ultrasound, CBC, EKG, Echo",
    management: "Enzyme replacement therapy or substrate reduction therapy (miglustat or eliglustat)",
    clinicalPearl: "Gaucher disease type II is primarily a central nervous disease with early death while Gaucher type 3 is similar to type I but also has neuro findings (seizures, ID)",
    notes: "Reports of Gaucher disease being caused by PSAP PVs",
    terminologyToKnow: "DEXA (Dual-Energy X-ray Absorptiometry) scan: Special X-ray that looks at bone density or body composition"
  },

  /* row 40 */
  {
    conditionName: "Hemochromatosis Type I",
    diseaseCategory: "Blood/Immune Disorders",
    gene: "HFE",
    inheritance: "AR",
    majorClinicalFeatures: "Increased iron absorption = skin pigmentation, diabetes",
    otherClinicalFeatures: "Abdominal pain, weakness, arthralgias, congestive heart failure, arrhythmias, hypogonadism, hepatomegaly",
    mechanismPathophysiology: "Extremely low expression of hepcidin, causing increased absorption of dietary iron",
    diagnosis: "Clinically and biochemically, and/or molecularly",
    majorWorkUp: "Iron studies (increased ferritin, increased transferrin-iron saturation). COnsider liver, joint, cardiac imaging as indicated",
    otherWorkUp: "Diabetes screening, serum testosterone or estradiol levels, FSH/LH levels",
    management: "Regular phlebotomy especially in females without menstrual cycles",
    clinicalPearl: "Clinical hemochromatosis occurs when there is end-organ damage secondary to iron overload vs Biochemical hemochromatosis which is when there is laboratory findings of iron overload WITHOUT end organ damage",
    notes: "Most commont variant in HFE is P.Cys282Tyr, though varies based on ethnicity",
    terminologyToKnow: ""
  },

  /* row 41 */
  {
    conditionName: "Hemophilia A",
    diseaseCategory: "Blood/Immune Disorders",
    gene: "F8",
    inheritance: "X-Linked",
    majorClinicalFeatures: "Prolonged bleeding episodes; Occur after minor procedure or even spontaneously; Dependent on level of factor VIII",
    otherClinicalFeatures: "N/A",
    mechanismPathophysiology: "Deficiency of factor VIII causing defective fibrin stabilization secondary to inadequate fibrin generation resulting in failure of secondary hemostasis",
    diagnosis: "Low factor VIII clotting activity in presense of a normal, functional von Willebrand factor level. Confirmed with molecular testing",
    majorWorkUp: "CBC, low factor VIII level, Severity of disease associated with % fator VIII clotting factor activity",
    otherWorkUp: "N/A",
    management: "Factor VIII concentrate infusions or desmopressin as needed; Gene therapy for severe cases",
    clinicalPearl: "~30% of people with severe hemophilia A will develop alloimmune inhibitors to factor VIII",
    notes: "~30% heterozygous females have factor VIII clotting activity below 40% and are at risk for bleeding",
    terminologyToKnow: "alloimmune: immune system attacks tissue from the same species (transplated tissue gets attacked)"
  },

  /* row 42 */
  {
    conditionName: "Hemophilia B",
    diseaseCategory: "Blood/Immune Disorders",
    gene: "F9",
    inheritance: "X-Linked",
    majorClinicalFeatures: "Prolonged bleeding episodes; Occur after minor procedure or even spontaneously; Dependent on level of factor IX",
    otherClinicalFeatures: "N/A",
    mechanismPathophysiology: "Deficiency of factor IX leads to defective coagulation cascade and inadequate formation of fibrin mesh",
    diagnosis: "Low factor IX clotting activity. Confirmed with molecular testing",
    majorWorkUp: "CVC, low factor IX level, Severity of disease associated with % factor XI clotting factor activity",
    otherWorkUp: "N/A",
    management: "Gene therapy and Factor IX concentrate infusions",
    clinicalPearl: "Hemgenix, an adeno-associated virus vector based gene therapy was aprroved for treating adults with hemophilia B in 2022",
    notes: "Hemophilia B patients benefit from at least an annual assessment at a hemophilia treatment center",
    terminologyToKnow: ""
  },
  
/* ========== TEMPLATE  ========== */
  
/*  

{
    conditionName: 
    diseaseCategory: 
    gene: 
    inheritance: 
    majorClinicalFeatures: 
    otherClinicalFeatures: 
    mechanismPathophysiology: 
    diagnosis: 
    majorWorkUp: 
    otherWorkUp: 
    management: 
    clinicalPearl: 
    notes: 
    terminologyToKnow: 
  },                               

  */
/* ========== TEMPLATE  ========== */

/* ======================================== 
~ Enter additional conditions before this template ~  
========================================*/
 



  
/* ========================================================
   DATA 2 - FLASHCARDS (You type these)
   Everycard needs a "deck" that matches a planet's data-deck
   in index.html: Terminology, Inheritance, conditions, testing,
   or ethics. The two below are EXAMPLES so you can see the 
   feature work - replace them with your own.
 ======================================================== */

const allCards = [
  { deck: "terminology", front: "Penetrance", back: "The proportion of carriers who show the associated trait."},
  { deck: "terminology", front: "Proband", back: "The individual through whom a family is first ascertained." },
  /* add more: { deck: "inheritance", front: "...", back: "..."}, */

  ];

/* ==========================================================
RENDER - CONDITIONS
========================================================== */

const conditionList = document.getElementById("condition-list");


function renderConditions() {
    conditionList.innerHTML = conditions.map(function (c) {
      return `
        <article class="condition">
          <h3 class="condition-name">${c.conditionName}</h3>
          <dl class="condition-details">
            <dt>Disease Category</dt><dd>${c.diseaseCategory}</dd>
            <dt>Gene</dt><dd>${c.gene}</dd>
            <dt>Inheritance</dt><dd>${c.inheritance}</dd>
            <dt>Major Clinical Features</dt><dd>${c.majorClinicalFeatures}</dd>
            <dt>Other Clinical Features</dt><dd>${c.otherClinicalFeatures}</dd>
            <dt>Mechanism / Pathophysiology</dt><dd>${c.mechanismPathophysiology}</dd>
            <dt>Diagnosis</dt><dd>${c.diagnosis}</dd>
            <dt>Major Work-Up</dt><dd>${c.majorWorkUp}</dd>
            <dt>Other Work-Up</dt><dd>${c.otherWorkUp}</dd>
            <dt>Management</dt><dd>${c.management}</dd>
            <dt>Clinical Pearl</dt><dd>${c.clinicalPearl}</dd>
            <dt>Notes</dt><dd>${c.notes}</dd>
            <dt>Terminology to Know</dt><dd>${c.terminologyToKnow}</dd>
          </dl>
        </article>
      `;
    }).join("");
  }
 
  renderConditions();


/* ==========================================================
FLASHCARDS - flip, draw, and deck loading
========================================================== */

const flashcard = document.getElementById("flashcard");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const drawButton = document.getElementById("draw-button");
const cardCounter = document.getElementById("card-counter");

let activeCards = [];
let cardIndex = 0;

function showCard() {
  if (activeCards.length === 0) {
    cardFront.textContent = "No cards in this deck yet.";
    cardBack.textContent = "";
    cardCounter.textContent = "";
    return;
  }

  cardFront.textContent = activeCards[cardIndex].front;
  cardBack.textContent = activeCards[cardIndex].back;
  flashcard.classList.remove("flipped");
  cardCounter.textContent = "Card " + (cardIndex + 1) + " of " + activeCards.length;
}

function loadDeck(deck) {
  flashcard.dataset.deck = deck;     /* colors the card via CSS */
  activeCards = allCards.filter(function (card) {
      return card.deck === deck;
  });
  cardIndex = 0;
  showCard();
}

flashcard.addEventListener("click", function () {
  flashcard.classList.toggle("flipped");
});

drawButton.addEventListener("click", function () {
  if (activeCards.length === 0) return;
  cardIndex = (cardIndex + 1) % activeCards.length;
  showCard();
});

/* ===============================================
  Planetary Deck Picker
=============================================== */

const orbit = document.getElementById("orbit");
const orbitHub = document.getElementById("orbit-hub");
const orbitNodes = document.querySelectorAll(".orbit-node");

function closeOrbit() {
  orbit.classList.remove("open");
  orbitHub.setAttribute("aria-expanded", "false");
}

orbitHub.addEventListener("click", function () {
  orbit.classList.toggle("open");
  const isOpen = orbit.classList.contains("open");
  orbitHub.setAttribute("aria-expanded", isOpen);
  orbitHub.textContent = isOpen ? "Close" : "Choose a deck";
 });

orbitNodes.forEach(function (node) {
                   node.addEventListener("click", function () {
                     const deck = node.dataset.deck;
                     loadDeck(deck);
                     closeOrbit();
                     orbitHub.textContent = node.textContent;
                   });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && orbit.classList.contains("open")) {
    closeOrbit();
    orbitHub.textContent = "Choose a deck";
  }
});

document.addEventListener("click", function (event) {
  if (orbit.classList.contains("open") && !orbit.contains(event.target)) {
    closeOrbit();
    orbitHub.textContent = "Choose a deck";
  }
});

});








