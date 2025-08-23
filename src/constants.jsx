//API URL
export const SP23_URL = 'http://www.speak23.com';
export const API_URL = 'https://www.23files.com';
//export const API_URL = 'http://127.0.0.1:8000';
//export const API_URL = process.env.REACT_APP_API_URL_;
export const FRONTEND_URL = 'https://www.speak23.net';
export const REGISTER_URL = 'https://www.speak23.net/RegisterPage';
////////////////////////////////////
//  Authentication - API End Points
/////////////////////////////////////

export const REGISTER = `${API_URL}/api/auth/register`;
export const LOGIN = `${API_URL}/api/auth/login`;
export const LOGOUT = `${API_URL}/api/auth/logout`;
export const USERDATA = `${API_URL}/api/auth/user`;  //returns all userdata
export const PUBLIC_USERDATA = `${API_URL}/api/auth/publicuser`;  //returns all public userdata for updating
export const UPDATE_PROFILE = `${API_URL}/api/auth/user`;  //returns ID, USERNAME, EMAIL

export const UPDATE_ALLUSERDATA  = `${API_URL}/api/auth/update_profile/` 

////////////
//  STRIPE
///////////

export const REACT_APP_STRIPE_API_TEST_PK = 'pk_test_51P6pCRAbLpI3osd3NTS9UvV9LMpYCPRL7CUTRTrkOtnsjnALIzQ6uDJ778g9QX4iuJb56tJrXvmTeIPGLDq9VEDU00FSJZSTdx';
export const INTERVALS = { 1: "daily", 2: "weekly", 3: "mo", 4: "quarterly", 5: "semi annually", 6: "yearly", };
export const TESTPIC = "https://olonizza.sirv.com/TestPic.jpeg";

////////////////////////////////////
//  Access CDN - Videos
/////////////////////////////////////

export const DATASMALL = "https://storage.googleapis.com/sp23_public_videos/videos/Data%20Small.mp4";
export const DATA = "https://storage.googleapis.com/sp23_public_videos/videos/Data.mp4";
export const DATA2 = "https://storage.googleapis.com/sp23_public_videos/videos/Data2.mp4";
export const DNA = "https://storage.googleapis.com/sp23_public_videos/videos/Dna.mp4";
export const FITNESS = "https://storage.googleapis.com/sp23_public_videos/videos/Fitness.mp4";
export const IMAGING = "https://storage.googleapis.com/sp23_public_videos/videos/Imaging.mp4";
export const LADY = "https://storage.googleapis.com/sp23_public_videos/videos/Lady.mp4";
export const LADYTREE = "https://storage.googleapis.com/sp23_public_videos/videos/Ladytree.mp4";
export const MANWATER = "https://storage.googleapis.com/sp23_public_videos/videos/Manwater.mp4";
export const MICROSCOPE = "https://storage.googleapis.com/sp23_public_videos/videos/Microscope.mp4";
export const MICROSCOPEDOCTOR = "https://storage.googleapis.com/sp23_public_videos/videos/Microscopedoctor.mp4";
export const NERVES = "https://storage.googleapis.com/sp23_public_videos/videos/Nerves.mp4";
export const FAMILY2 = "https://storage.googleapis.com/sp23_public_videos/videos/Family2.mp4";


////////////////////////////////////
//  Access Genomics Files
/////////////////////////////////////

export const PATHOGENIC = `${API_URL}/api/pathogenic_filter`;
export const VARPATH = `${API_URL}/api/varpath`;
export const GENARCHIVE = `${API_URL}/api/genarchive`;
export const FILTER_VARIANTS = `${API_URL}/api/variants_filter`;

export const GENDATA = `${API_URL}/api/genfile`;



//export const VARHARDPATH = `${API_URL}/api/varpath`;


export const startpic = "https://olonizza.sirv.com/cool-pic.webp"

////////////////////////////////////
//  CVD -CardioVascular Panel
/////////////////////////////////////

export const CVD_image1 = "https://olonizza.sirv.com/cvd.gif"

export const fto = "https://olonizza.sirv.com/FTO_gene.webp"
export const leptin = "https://olonizza.sirv.com/Leptin.webp"

export const FTO = `${API_URL}/api/fto`;
export const LEPTIN = `${API_URL}/api/leptin`;
export const MONO = `${API_URL}/api/mono`;
export const STRUCT = `${API_URL}/api/struct`;

export const RAS = `${API_URL}/api/ras`;
export const HYP = `${API_URL}/api/hyp`;
export const HYPMONO = `${API_URL}/api/hypmono`;

export const DT1 = `${API_URL}/api/dt1`;
export const DT2 = `${API_URL}/api/dt2`;
export const DIA = `${API_URL}/api/dia`;

export const FAM = `${API_URL}/api/fam`;
export const LIP = `${API_URL}/api/lip`;

export const DIS = `${API_URL}/api/dis`;
export const CARDIO = `${API_URL}/api/cardio`;

export const MICRO = `${API_URL}/api/micro`;
export const GUTHEARTAXIS = `${API_URL}/api/gutheartaxis`;

export const DRUGSTATINS = `${API_URL}/api/drugstatins`;
export const GUIDESTATINS = `${API_URL}/api/guidestatins`;
export const DRUGREC = `${API_URL}/api/drugrec`;

export const ROSUVASTATIN = `${API_URL}/api/drugguide_drugfilter/?Drug=rosuvastatin`;
export const FLUVASTATIN = `${API_URL}/api/drugguide_drugfilter/?Drug=fluvastatin`;
export const STATIN = `${API_URL}/api/drugguide_drugfilter/?Drug=all statins`;
export const CLOPIDOGREL = `${API_URL}/api/drugguide_drugfilter/?Drug=clopidogrel`;
export const NSAID = `${API_URL}/api/drugguide_drugfilter/?Drug=NSAIDs`;
export const PHENYTOIN = `${API_URL}/api/drugguide_drugfilter/?Drug=phenytoin`;
export const ABACAVIR = `${API_URL}/api/drugguide_drugfilter/?Drug=abacavir`;
export const ACENOCOUMAROL = `${API_URL}/api/drugguide_drugfilter/?Drug=acenocoumarol`;
export const ALLOPURINOL = `${API_URL}/api/drugguide_drugfilter/?Drug=allopurinol`;
export const AMITRIPTYLINE = `${API_URL}/api/drugguide_drugfilter/?Drug=amitriptyline`;
export const ARIPIPRAZOLE = `${API_URL}/api/drugguide_drugfilter/?Drug=aripiprazole`;

export const ATAZANAVIR = `${API_URL}/api/drugguide_drugfilter/?Drug=atazanavir`;
export const ATOMOXETINE = `${API_URL}/api/drugguide_drugfilter/?Drug=atomoxetine`;
export const ATORVASTATIN = `${API_URL}/api/drugguide_drugfilter/?Drug=atorvastatin`;
export const AZATHIOPRINE = `${API_URL}/api/drugguide_drugfilter/?Drug=azathioprine`;
export const BREXIPIPRAZOLE = `${API_URL}/api/drugguide_drugfilter/?Drug=brexpiprazole`;

export const CAPECITABINE = `${API_URL}/api/drugguide_drugfilter/?Drug=capecitabine`;
export const CARBAMAZEPINE = `${API_URL}/api/drugguide_drugfilter/?Drug=carbamazepine`;
export const CELECOXIB = `${API_URL}/api/drugguide_drugfilter/?Drug=celecoxib`;
export const CITALOPRAM = `${API_URL}/api/drugguide_drugfilter/?Drug=citalopram`;
export const CLOMIPRAMINE = `${API_URL}/api/drugguide_drugfilter/?Drug=clomipramine`;
export const CODEINE = `${API_URL}/api/drugguide_drugfilter/?Drug=codeine`;

export const DAPSONE = `${API_URL}/api/drugguide_drugfilter/?Drug=dapsone`;
export const DESIPRAMINE = `${API_URL}/api/drugguide_drugfilter/?Drug=desipramine`;
export const DEXLANSOPRAZOLE = `${API_URL}/api/drugguide_drugfilter/?Drug=dexlansoprazole`;
export const DOXEPIN = `${API_URL}/api/drugguide_drugfilter/?Drug=doxepin`;
export const EFAVIRENZ = `${API_URL}/api/drugguide_drugfilter/?Drug=efavirenz`;
export const ELIGLUSTAT = `${API_URL}/api/drugguide_drugfilter/?Drug=eliglustat`;
export const ESCITALOPRAM = `${API_URL}/api/drugguide_drugfilter/?Drug=escitalopram`;


export const DRUGTYPES = `${API_URL}/api/drugtypes`;

export const dna15 = "https://olonizza.sirv.com/j2.jpeg"
export const dna5 = "https://olonizza.sirv.com/dna5.png"
export const dna6 = "https://olonizza.sirv.com/dna6.png"
export const microbes = "https://olonizza.sirv.com/microbes.jpeg"
export const neuro = "https://olonizza.sirv.com/neurology.jpeg"
export const skin = "https://olonizza.sirv.com/skin.jpeg"
export const eyes = "https://olonizza.sirv.com/eyes.jpeg"
export const cancer = "https://olonizza.sirv.com/cancer.jpeg"
export const it = "https://olonizza.sirv.com/it.jpeg"
export const persdata ="https://olonizza.sirv.com/persdata.jpeg"
export const pw = "https://olonizza.sirv.com/pw.jpeg"
export const bill = "https://olonizza.sirv.com/billing.jpeg"
export const cards = "https://olonizza.sirv.com/cards.jpeg"
export const upgrade = "https://olonizza.sirv.com/upgrade.jpeg"
export const error = "https://olonizza.sirv.com/error.jpeg"

const bioclock = "https://olonizza.sirv.com/bioclock.jpeg"
export const yoga1 = "https://olonizza.sirv.com/yoga.png"


////////////////////////////////////
//  DRUGTYPE 
/////////////////////////////////////

export const CYP1A2_GENOTYPE_DATA = `${API_URL}/api/cyp1a2alleles`;
export const CYP1A2_FUNC_DATA = `${API_URL}/api/cyp1a2func`;
export const CYP1A2_METABOLIZER_DATA = `${API_URL}/api/cyp1a2metabolizer`;

export const CYP2A6_GENOTYPE_DATA = `${API_URL}/api/cyp2a6alleles`;
export const CYP2A6_FUNC_DATA = `${API_URL}/api/cyp2a6func`;
export const CYP2A6_METABOLIZER_DATA = `${API_URL}/api/cyp2a6metabolizer`;

export const CYP2A13_GENOTYPE_DATA = `${API_URL}/api/cyp2a13alleles`;
export const CYP2A13_FUNC_DATA = `${API_URL}/api/cyp2a13func`;
export const CYP2A13_METABOLIZER_DATA = `${API_URL}/api/cyp2a13metabolizer`;

export const CYP2B6_GENOTYPE_DATA = `${API_URL}/api/cyp2b6alleles`;
export const CYP2B6_FUNC_DATA = `${API_URL}/api/cyp2b6func`;
export const CYP2B6_METABOLIZER_DATA = `${API_URL}/api/cyp2b6metabolizer`;

export const CYP2C8_GENOTYPE_DATA = `${API_URL}/api/cyp2c8alleles`;
export const CYP2C8_FUNC_DATA = `${API_URL}/api/cyp2c8func`;
export const CYP2C8_METABOLIZER_DATA = `${API_URL}/api/cyp2c8metabolizer`;

export const CYP2C19_GENOTYPE_DATA = `${API_URL}/api/cyp2c19alleles`;
export const CYP2C19_FUNC_DATA = `${API_URL}/api/cyp2c19func`;
export const CYP2C19_METABOLIZER_DATA = `${API_URL}/api/cyp2c19metabolizer`;

export const CYP2D6_GENOTYPE_DATA = `${API_URL}/api/cyp2d6alleles`;
export const CYP2D6_FUNC_DATA = `${API_URL}/api/cyp2d6func`;
export const CYP2D6_METABOLIZER_DATA = `${API_URL}/api/cyp2d6metabolizer`;

export const CYP3A4_GENOTYPE_DATA = `${API_URL}/api/cyp3a4alleles`;
export const CYP3A4_FUNC_DATA = `${API_URL}/api/cyp3a4func`;
export const CYP3A4_METABOLIZER_DATA = `${API_URL}/api/cyp3a4metabolizer`;

export const CYP3A5_GENOTYPE_DATA = `${API_URL}/api/cyp3a5alleles`;
export const CYP3A5_FUNC_DATA = `${API_URL}/api/cyp3a5func`;
export const CYP3A5_METABOLIZER_DATA = `${API_URL}/api/cyp3a5metabolizer`;

export const CYP4F2_GENOTYPE_DATA = `${API_URL}/api/cyp4f2alleles`;
export const CYP4F2_FUNC_DATA = `${API_URL}/api/cyp4f2func`;
export const CYP4F2_METABOLIZER_DATA = `${API_URL}/api/cyp4f2metabolizer`;

export const DPYD_GENOTYPE_DATA = `${API_URL}/api/dpydalleles`;
export const DPYD_FUNC_DATA = `${API_URL}/api/dpydfunc`;
export const DPYD_METABOLIZER_DATA = `${API_URL}/api/dpydmetabolizer`;

export const NUDT15_GENOTYPE_DATA = `${API_URL}/api/nudt15alleles`;
export const NUDT15_FUNC_DATA = `${API_URL}/api/nudt15func`;
export const NUDT15_METABOLIZER_DATA = `${API_URL}/api/nudt15metabolizer`;

export const SLCO1B1_GENOTYPE_DATA = `${API_URL}/api/slco1b1alleles`;
export const SLCO1B1_FUNC_DATA = `${API_URL}/api/slco1b1func`;
export const SLCO1B1_METABOLIZER_DATA = `${API_URL}/api/slco1b1metabolizer`;

export const HLAA_GENOTYPE_DATA = `${API_URL}/api/hlaaalleles`;
export const HLAA_FUNC_DATA = `${API_URL}/api/hlaafunc`;
export const HLAA_METABOLIZER_DATA = `${API_URL}/api/hlaametabolizer`;

export const HLAB_GENOTYPE_DATA = `${API_URL}/api/hlaballeles`;
export const HLAB_FUNC_DATA = `${API_URL}/api/hlabfunc`;
export const HLAB_METABOLIZER_DATA = `${API_URL}/api/hlabmetabolizer`;


////////////////////////////////////
//  CANCER APP
/////////////////////////////////////

export const Breast_DATA = `${API_URL}/api/breast/`;
export const Reproductive_DATA = `${API_URL}/api/reproductive/`;
export const Head_DATA = `${API_URL}/api/head`;
export const Brain_DATA = `${API_URL}/api/brain`;
export const Digestion_DATA = `${API_URL}/api/digestion`;
export const Urinary_DATA = `${API_URL}/api/urinary`;
export const Lung_DATA = `${API_URL}/api/lung`;
export const Endocrine_DATA = `${API_URL}/api/endocrine`;
export const Skin_DATA = `${API_URL}/api/skin`;
export const Bone_DATA = `${API_URL}/api/bone`;
export const Eye_DATA = `${API_URL}/api/eye`;
export const Blood_DATA = `${API_URL}/api/blood`;


const Speak23Logo="https://olonizza.sirv.com/logo%20final%202022/logo_sp23_white_v04.svg"
const Speak23LogoWhite="https://olonizza.sirv.com/logo%20final%202022/logo_sp23_white_v06.svg"
const Speak23LogoBlack="https://olonizza.sirv.com/logo%20final%202022/logo_sp23_dark_v06.svg"
//const Speak23LogoBlack1="https://olonizza.sirv.com/logo_sp23_dark_v04.svg"
const background_1="https://olonizza.sirv.com/background_1.jpg"
const bg1="https://olonizza.sirv.com/logo%20final%202022/bg1.png"
const bg2="https://olonizza.sirv.com/logo%20final%202022/bg12.png"

const cb50="https://olonizza.sirv.com/cb50.jpg"

const gpLink="https://www.guentherpatterer.com"
const speak23Link="https://www.speak23.com/"
const soundcloudLink="https://soundcloud.com/user-118085569"
const linkLinkedin="https://www.linkedin.com/in/guentherpatterer"
const facebookLink="https://www.facebook.com/guenther.patterer.5"
const instaLink="https://www.instagram.com/guepatt/"

const imageParallaxFoto="https://olonizza.sirv.com/sp23_parallax.svg"
const startPageParallaxFoto="https://olonizza.sirv.com/parallax15.svg"
const startPageParallaxFoto2="https://olonizza.sirv.com/j1.jpeg"
const startPageParallaxFoto3="https://olonizza.sirv.com/bio1.jpg"
const startPageParallaxFoto4="https://olonizza.sirv.com/biofabr.jpg"
const startPageParallaxFoto5="https://media.giphy.com/media/QTfa8EZ9dQAHzF4e06/source.gif"
//const speak23_overview_1="https://olonizza.sirv.com/speak23_overview_1.svg"
const backgroundFoto="https://olonizza.sirv.com/bg1.jpg"
export const  backgroundFoto2="https://olonizza.sirv.com/16.jpg"
export const examples = "https://olonizza.sirv.com/dashboard%20examples.png"
const gauge="https://olonizza.sirv.com/gauge2.svg"
const sensor1="https://olonizza.sirv.com/biosensors1.jpg"

const dna_go="https://olonizza.sirv.com/DNA_go.png"
const dna_1="https://olonizza.sirv.com/DNA1.png"
const cb42="https://olonizza.sirv.com/cb42x.jpg"
const cb19="https://olonizza.sirv.com/cb19x.jpg"
const cb9="https://olonizza.sirv.com/cb9x.jpg"
const cb101="https://olonizza.sirv.com/cb101.jpg"
const babydna1="https://olonizza.sirv.com/babydna.svg"

const dataTunnel="https://olonizza.sirv.com/dataTunnel.jpeg"
const dataTunnel1="https://olonizza.sirv.com/cardImage1.svg"
const dataTunnel2="https://olonizza.sirv.com/cardImage2.svg"
const dataTunnel3="https://olonizza.sirv.com/cardImage3.svg"
const dataTunnel4="https://olonizza.sirv.com/cardImage4.svg"
const dataFoto="https://olonizza.sirv.com/dataFoto.webp"
const dataFoto2="https://olonizza.sirv.com/feelgood1.jpg"
const insightFoto="https://olonizza.sirv.com/j1.jpeg"
const quoteFoto="https://olonizza.sirv.com/bg.jpg"
const quoteFoto2="https://olonizza.sirv.com/j1.jpeg"
const peopleFoto="https://olonizza.sirv.com/photo-1474552226712-ac0f0961a954.jpg"
const teamFoto="https://olonizza.sirv.com/TEAM_v7.svg"
const gueFoto="https://olonizza.sirv.com/gueNewYork.jpg"
const solutions="https://olonizza.sirv.com/solutions5.svg"
const smile="https://olonizza.sirv.com/smile4.svg"

const anna="https://olonizza.sirv.com/card-profile5-square.jpg"
const cb1="https://olonizza.sirv.com/cb1x.jpg"

const startupFoto_Health="https://olonizza.sirv.com/bill-oxford-tR0PPLuN6Pw-unsplash.jpg"
const startupFoto_BioFab="https://olonizza.sirv.com/biofabr.jpg"
const startupFoto_Music="https://olonizza.sirv.com/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
const startupFoto_Trading="https://olonizza.sirv.com/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg"


export const bgFoto3="https://olonizza.sirv.com/bgFoto3.gif"
export const bgFoto6="https://olonizza.sirv.com/bgFoto6.png"
export const bgFoto7="https://olonizza.sirv.com/bgFoto7.jpg"
export const bgFoto8="https://olonizza.sirv.com/bgFoto8.png"
export const bgFoto9="https://olonizza.sirv.com/bgFoto9.jpg"
export const bgFoto10="https://olonizza.sirv.com/wallpaper2.jpg" 


const aboutFoto1='https://olonizza.sirv.com/gue_pageFoto1.svg'
const avatar1="https://olonizza.sirv.com/avatar1.jpg"
const avatar2="https://olonizza.sirv.com/avatar2.jpg"
const avatar3="https://olonizza.sirv.com/avatar3.jpg"
const avatar4="https://olonizza.sirv.com/avatar4.jpg"

const vaccLink="https://olonizza.sirv.com/191219_Impfplan-2020_%C3%9Cbersicht-tabelle_Druck.pdf"

const product1="https://olonizza.sirv.com/sensor1.jpg"
const product2="https://olonizza.sirv.com/dna_test1.jpg"
const product3="https://olonizza.sirv.com/microbiome.jpg"
export const microbiome="https://olonizza.sirv.com/microbiome_edited.jpg"
const product4="https://olonizza.sirv.com/stool.jpeg"
export const dysbiosis="https://olonizza.sirv.com/MB_dysbiosis.png"


const bmi="https://olonizza.sirv.com/BMI_pic.jpg"
const bp_pic="https://olonizza.sirv.com/bp_pic.jfif"
const age="https://olonizza.sirv.com/age.jfif"
const drug="https://olonizza.sirv.com/drug.jpg"
const drug2="https://olonizza.sirv.com/drug2.jpg"
const drug22="https://olonizza.sirv.com/drug2_edited.jpg"
const micro="https://olonizza.sirv.com/microbiome.jfif"
const bloodgroups="https://olonizza.sirv.com/blood2.jfif"
const ecg="https://olonizza.sirv.com/ecg_image.jfif"
export const kardia="https://olonizza.sirv.com/6L-green_large.webp"
export const cvd ="https://olonizza.sirv.com/cvd.jfif"
export const clock = "https://olonizza.sirv.com/clock.jpeg"

export const julia="https://olonizza.sirv.com/julia.jpg"
export const family="https://olonizza.sirv.com/family.jpg"
export const family2="https://olonizza.sirv.com/family2.jpg"
export const family4="https://olonizza.sirv.com/family_small4.jpg"
export const people="https://olonizza.sirv.com/people.jpg"

export const pharmVar="https://olonizza.sirv.com/pharmvar-logo.png"
export const cpic="https://olonizza.sirv.com/cpic-full-600.png"
export const pgkb="https://olonizza.sirv.com/pgkb.png"
export const fda="https://olonizza.sirv.com/fda.jpeg"

export const BASEDATA = `${API_URL}/api/base`;
export const WEIGHTDATA = `${API_URL}/api/bmiweight/`;
export const BLOODGROUPDATA = `${API_URL}/api/bloodgroup/`;
export const PERSDATA = `${API_URL}/api/pers/`;

export const pedigree = "https://olonizza.sirv.com/pedigree_pat.png"

export const RECORD = `${API_URL}/api/new_record/`;
export const AGE = `${API_URL}/api/auth/age`;

export const LABDOCS = `${API_URL}/api/lab/`;
export const XRAYDOCS = `${API_URL}/api/xray/`;
export const THYROIDDOCS = `${API_URL}/api/thyroid/`;
export const COLONDOCS = `${API_URL}/api/colon/`;

export const VACCSDATA = `${API_URL}/api/vaccs/`;
export const VACCSPASS = `${API_URL}/api/vacc_posts/`;
export const VACCPASS = `${API_URL}/api/vacc_posts/`;
export const VACCLIST = `${API_URL}/api/vaccs/`;
export const VACCCOUNT = `${API_URL}/api/vacc_counts`;

export const BPLIST = `${API_URL}/api/bpm1/`;
export const BPAVERAGES = `${API_URL}/api/bpm1/avg`;
export const BPAVERAGES_7D = `${API_URL}/api/bpm1/avg7d`;

export const BPAVERAGES2 = `${API_URL}/api/bpm1/avg2`;
export const ECGLIST = `${API_URL}/api/ecg/`;
export const ECGPDF = `${API_URL}/api/ecg_posts/`;
export const ECGCOUNT = `${API_URL}/api/ecg/counts`;
export const DOCUPLOAD = `${API_URL}/api/doc_posts/`;

export const BLOODSUGAR_A1C = `${API_URL}/api/bloodSugarA1c/`;
export const BLOODLIPIDS_LDL = `${API_URL}/api/bloodLipidsLdl/`;
export const VIT = `${API_URL}/api/vit/`;
export const CRP = `${API_URL}/api/crp/`;

export const BLOODSCAN = `${API_URL}/api/blood_posts/`;
export const BLOODLIST = `${API_URL}/api/bloodlist/`;
export const FORGOT_PASSWORD = `${API_URL}/api/forgotpw/`;

export const igv_link = 'https://cdn.jsdelivr.net/npm/igv@2.15.5/dist/igv.esm.min.js';
export const VARIANTDISEASELIST = `${API_URL}/api/var1/`;
export const VARIANTNUTRIGENICLIST = `${API_URL}/api/var2/`;
export const VARIANTFITNESSLIST = `${API_URL}/api/var3/`;
export const VARIANTLIFESTYLELIST = `${API_URL}/api/var4/`;

export const bp1_pdf='https://olonizza.sirv.com/pdf/high-blood-pressure.pdf'
export const bp2_pdf='https://olonizza.sirv.com/pdf/lpi-hypertension-infographic-printer-friendly.pdf'
export const bmi_pdf='https://olonizza.sirv.com/pdf/BMI%20pdf.pdf'
export const ecg_pdf="https://olonizza.sirv.com/pdf/Basic-ECG-Interpretation.pdf"
export const bloodtype_pdf="https://olonizza.sirv.com/pdf/bloodtype_pdf.pdf"
export const drugtype_pdf="https://olonizza.sirv.com/pdf/Drugtype_pdf.pdf"
export const bioage_pdf="https://olonizza.sirv.com/pdf/aging_sinclair2.pdf"
export const microbiome_pdf="https://olonizza.sirv.com/pdf/Microbiome.pdf"
export const cvd_pdf="https://olonizza.sirv.com/pdf/CVD_pdf.pdf"
export const a1c_pdf = "https://olonizza.sirv.com/pdf/HbA1c.pdf"
export const ldl_pdf ="https://olonizza.sirv.com/pdf/LDL.pdf"

export const cancer_sel = "https://olonizza.sirv.com/Cancers_selected.jpeg"
export const cancerstat = "https://olonizza.sirv.com/cancer_stats_2023.webp"
export const cancerstat_2 = "https://olonizza.sirv.com/cancer_stats_2_2023.jpg"
export const cancerstat_3 = "https://olonizza.sirv.com/cancer_mortality.jpg"


const vaccPasses = [
       {
         original:  "https://storage.cloud.google.com/speak23buckets/post_images/TSAB0741_vacccard_1_edited.jpg",
         thumbnail: "https://storage.cloud.google.com/speak23buckets/post_images/TSAB0741_vacccard_1_edited.jpg"
       },
       {original: "https://storage.cloud.google.com/speak23buckets/post_images/TSAB0741_vaccpcard_2.jpg",
       thumbnail:  "https://storage.cloud.google.com/speak23buckets/post_images/TSAB0741_vaccpcard_2.jpg"        
       },
     ];

     const imageRecs = [
      {
        original:  "http://127.0.0.1:8000/media/post_images/blood1.jpg",
        thumbnail: "http://127.0.0.1:8000/media/post_images/blood1.jpg"
      },
      {
        original:  "http://127.0.0.1:8000/media/post_images/blood2.jpg",
        thumbnail: "http://127.0.0.1:8000/media/post_images/blood2.jpg"
      },
      {
        original:  "http://127.0.0.1:8000/media/post_images/p2_mRrJo91.jpg",
        thumbnail: "http://127.0.0.1:8000/media/post_images/p2_mRrJo91.jpg"
      },
      
    ]

export {

  bioclock,
  dna_go,
  sensor1,
  babydna1,
  cb50,
  cb42,
  cb19,
  cb9,
  cb101,  
  gauge,
    Speak23Logo,
    Speak23LogoBlack,
    Speak23LogoWhite,
    background_1,
    bmi,
    bp_pic,
    dna_1,
    bg1,
    bg2,
    age,
    drug,
    drug2,
    drug22,
    micro,
    bloodgroups,
    ecg,

    gpLink,
    speak23Link,
    soundcloudLink,
    linkLinkedin,
    facebookLink,
    instaLink,
    startPageParallaxFoto,
    startPageParallaxFoto2,
    startPageParallaxFoto3,
    startPageParallaxFoto4,
    startPageParallaxFoto5,
    backgroundFoto,
    imageParallaxFoto,

    dataTunnel,
    dataTunnel1,
    dataTunnel2,
    dataTunnel3,
    dataTunnel4,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    dataFoto,
    dataFoto2,
    anna,
    cb1,
    insightFoto,
    quoteFoto,
    quoteFoto2,
    peopleFoto,
    teamFoto,
    gueFoto,
    solutions,
    smile,

    startupFoto_Health,
    startupFoto_BioFab,
    startupFoto_Music,
    startupFoto_Trading,
    aboutFoto1,

    vaccPasses,
    imageRecs,
    vaccLink,

    product1,
    product2,
    product3,
    product4,
    
}