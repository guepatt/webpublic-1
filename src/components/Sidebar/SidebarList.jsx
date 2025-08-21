import List from '@mui/material/List';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddLinkIcon from '@mui/icons-material/AddLink';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PictureInPictureOutlinedIcon from '@mui/icons-material/PictureInPictureOutlined';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import StartIcon from '@mui/icons-material/Start';
import PersonIcon from '@mui/icons-material/Person';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { SidebarItem } from './SidebarItem';
import { SidebarChapter } from './SidebarChapter';


export const sidebarlist = (

<>

<List component="nav" disablePadding sx={{mt: '2rem',width: '100%', maxWidth: 340,}} >
  
{/*MANAGE YOUR HEALTH*/}
<SidebarChapter chapter = {"MANAGE YOUR HEALTH"}  />

{/* Manage your health / disease risks */}
<SidebarItem drawerlink = {"/CockpitWelcome"} itemicon = { <HomeMaxIcon  /> } draweritem = {"Health Home"}  />

<SidebarItem drawerlink = {"/CVDWelcome"} itemicon = {<HeartBrokenIcon />} draweritem = {"Cardiovascular Health"}  />
<SidebarItem drawerlink = {"/ImmuneWelcome"} itemicon = {<VaccinesIcon  />} draweritem = {"Immune System Health"}  />
<SidebarItem drawerlink = {"/NeuroWelcome"} itemicon = { <PsychologyIcon  />} draweritem = {"Neurology Health"}  />
<SidebarItem drawerlink = {"/SkinWelcome"} itemicon = { <SplitscreenIcon fontSize="small" />} draweritem = {"Skin Health"}  />
<SidebarItem drawerlink = {"/EyesWelcome"} itemicon = {<VisibilityOutlinedIcon />} draweritem = {"Eyes Health"}  />
<SidebarItem drawerlink = {"/CancerWelcome"} itemicon = { <CoronavirusIcon />} draweritem = {"Cancer Prevention"}  />

{/* PHARMACOGENETICS */}
<SidebarChapter chapter = {"RIGHT DRUG & RIGHT DOSE"}  />
<SidebarItem drawerlink = {"/Drugs"} itemicon = {<MedicationLiquidIcon />} draweritem = {"PGx Drug Guide"}  />
{/* <SidebarItem drawerlink = {"/Pgx"} itemicon = {<MedicationLiquidIcon />} draweritem = {"PGx Diplotypes"}  />*/}

{/* GENERAL HEALTH RECORDS */}
<SidebarChapter chapter = {"HEALTH RECORDS"}  />
<SidebarItem drawerlink = {"/RecordsWelcome"} itemicon = { <AddLinkIcon  /> } draweritem = {"Health Records"}  />
<SidebarItem drawerlink = {"/VaccsWelcome"} itemicon = { <AddLinkIcon  /> } draweritem = {"Vaccination History"}  />
<SidebarItem drawerlink = {"/FamilyWelcome"} itemicon = {  <FilterListOutlinedIcon  /> } draweritem = {"Family Disease History"}  />

{/* Counselling - Booking a Physician */}
<SidebarChapter chapter = {"DOCTOR COUNSELING"}  />

<SidebarItem drawerlink = {"/Doctor"} itemicon = {<MedicalInformationIcon /> } draweritem = {"Book Counselling"}  />
<SidebarItem drawerlink = {"/Meeting"} itemicon = { <CompareArrowsIcon /> } draweritem = {"Video Conferencing"}  />

{/* USER ADMIN & BILLING */}
<SidebarChapter chapter = {"USER ADMINISTRATION"}  />
<SidebarItem drawerlink = {"/UserAdminWelcome"} itemicon = { <PersonIcon /> } draweritem = {"User Admin"}  />
<SidebarItem drawerlink = {"/SubscriptionWelcome"} itemicon = { <SubscriptionsIcon /> } draweritem = {"Subscription"}  />
<SidebarItem drawerlink = {"/ArchiveWelcome"} itemicon = { <StartIcon /> } draweritem = {"Data Download"}  />

<SidebarItem drawerlink = {"/MainWelcome"} itemicon = { <PictureInPictureOutlinedIcon /> } draweritem = {"Old Cockpit"}  />

</List>

</>
)