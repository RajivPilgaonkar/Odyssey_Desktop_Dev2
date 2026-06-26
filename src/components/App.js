import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
//import { Offline, Online } from "react-detect-offline";

import LandingPage from './landingPage/LandingPage';
import DashboardPage from './dashboardPage/DashboardPage';
import CurrenciesPage from './masters/currenciesPage/CurrenciesPage';
import RoomTypesPage from './masters/roomTypesPage/RoomTypesPage';
import MealPlansPage from './masters/mealPlansPage/MealPlansPage';
import TicketExceptionsPage from './masters/ticketExceptionsPage/TicketExceptionsPage';
import TicketClassExceptionsPage from './masters/ticketClassExceptionsPage/TicketClassExceptionsPage';
import PreferredRoutesPage from './masters/preferredRoutesPage/PreferredRoutesPage';
import PrestoExclusionsPage from './masters/prestoExclusionsPage/PrestoExclusionsPage';
import ExchRatesPage from './masters/exchRatesPage/ExchRatesPage';
import InvExchRatePage from './masters/invExchRatesPage/InvExchRatePage';
import TaxesPage from './masters/taxesPage/TaxesPage';
import TaxRatesPage from './masters/taxRatesPage/TaxRatesPage';
import EntryTaxesPage from './masters/entryTaxesPage/EntryTaxesPage';
import MarginsPage from './masters/marginsPage/MarginsPage';
import BoardCaptionsPage from './masters/boardCaptionsPage/BoardCaptionsPage';
import AddressbookCategoriesPage from './masters/addressbookCategoriesPage/AddressbookCategoriesPage';
import SearchTagsPage from './masters/searchTagsPage/SearchTagsPage';
import AgentCancellationsPage from './masters/agentCancellationsPage/AgentCancellationsPage';
import ConsultantsPage from './masters/consultantsPage/ConsultantsPage';
import CountriesPage from './masters/countriesPage/CountriesPage';
import StatesPage from './masters/statesPage/StatesPage';
import CitiesPage from './masters/citiesPage/CitiesPage';
import PlaceOfSupplyPage from './masters/placeOfSupplyPage/PlaceOfSupplyPage';
import VehiclesPage from './masters/vehiclesPage/VehiclesPage';
import CarHireAgentsPage from './masters/carHireAgentsPage/CarHireAgentsPage';
import CarHireDefaultPerKmAgentsPage from './masters/carHireDefaultPerKmAgentsPage/CarHireDefaultPerKmAgentsPage';
import DistancesPage from './masters/distancesPage/DistancesPage';
import ShortestRoutePage from './masters/shortestRoutePage/ShortestRoutePage';
import CityGroupsPage from './masters/cityGroupsPage/CityGroupsPage';
import SightseeingPage from './masters/sightseeingPage/SightseeingPage';
import TransfersPage from './masters/transfersPage/TransfersPage';
import TransferCityPairsPage from './masters/transferCityPairsPage/TransferCityPairsPage';
import AirlinesPage from './masters/airlinesPage/AirlinesPage';
import ClassesPage from './masters/classesPage/ClassesPage';
import AircraftTypesPage from './masters/aircraftTypesPage/AircraftTypesPage';
import TrainCategoriesPage from './masters/trainCategoriesPage/TrainCategoriesPage';
import TrainDeadlinesPage from './masters/trainDeadlinesPage/TrainDeadlinesPage';
import TrainStationsPage from './masters/trainStationsPage/TrainStationsPage';
import FixedItinerariesPage from './masters/fixedItinerariesPage/FixedItinerariesPage';
import TrainsPage from './masters/trainsPage/TrainsPage';
import BookingsPage from './masters/bookingsPage/BookingsPage';
import DriveTypesPage from './masters/driveTypesPage/DriveTypesPage';
import CarPerKmPage from './transactions/costings/carPerKmPage/CarPerKmPage';
import CarP2pPage from './transactions/costings/carP2pPage/CarP2pPage';
import CarCityGroupsPage from './transactions/costings/carCityGroupsPage/CarCityGroupsPage';
import AddressbookPage from './masters/addressbookPage/AddressbookPage';
import AddressbookRankingsPage from './masters/addressbookRankingsPage/AddressbookRankingsPage';
import CostAccommodationPage from './transactions/costings/costAccommodationPage/CostAccommodationPage';
import CostServicesPage from './transactions/costings/costServicesPage/CostServicesPage';
import CopyCostings from './transactions/costings/copyCostingsPage/CopyCostings';
import CostReportsPage from './transactions/costings/costReportsPage/CostReportsPage';
import InvoicePage from './transactions/invoices/invoicesPage/InvoicesPage';
import InvoiceListingPage from './transactions/invoices/listInvoicesPage/InvoiceListingPage';
import InvPymtBeneficiaryPage from './masters/invPymtBeneficiaryPage/InvPymtBeneficiaryPage';
import GenVoucherPage from './transactions/vouchers/generateVouchersPage/GenVoucherPage';
import ListVoucherPage from './transactions/vouchers/listVouchersPage/ListVoucherPage';
import VoucherSelectionPage from './transactions/vouchers/voucherSelectionPage/VoucherSelectionPage';
import VoucherMailingPage from './transactions/vouchers/voucherMailingPage/VoucherMailingPage';
import VoucherMailStatusPage from './transactions/vouchers/voucherMailStatusPage/VoucherMailStatusPage';
import ElementPage from './transactions/elements/elementsPage/ElementsPage';
import TrainElementSectorsPage from './masters/trainElementSectorsPage/TrainElementSectorsPage';
import PrincipalAgentNetworksPage from './masters/principalAgentNetworksPage/PrincipalAgentsPage';
import RouteFinderPage from './transactions/routeFinder/routeFinderPage/RouteFinderPage';
import ModulesPage from './transactions/presto/prestoModulesPage/moduleListPage/ModulesPage';
import PrestoListPage from './transactions/presto/prestoListPage/PrestoListPage';
import PrestoModuleListPage from './transactions/presto/prestoModuleListPage/PrestoModuleListPage';
import PrestoConfirmationManagerPage from './transactions/presto/prestoConfirmationManagerPage/PrestoConfirmationManagerPage';
import VoucherRemarksPage from './masters/voucherRemarksPage/VoucherRemarksPage';
import VoucherPaymentsPage from './transactions/vouchers/voucherPaymentsPage/VoucherPaymentsPage';
import VoucherDateRangeListingPage from './transactions/vouchers/voucherDateWiseListPage/VoucherDateWiseListingPage';
import AdmUsersPage from './masters/admUsersPage/AdmUsersPage';
import AdmMenuModulesPage from './masters/admMenuModulesPage/AdmMenuModulesPage';
import AdmUserPermissionsPage from './masters/admUserPermissionsPage/AdmUserPermissionsPage';
import UtilitiesPage from './masters/utilitiesPage/UtilitiesPage';
import ChangePasswordPage from './masters/changePasswordPage/ChangePasswordPage';

//import { pageStyle} from '../config/paths';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // load googe font
    WebFont.load({
      google: {
        families: ['Lato']
      }
    });

  }

  // this executes only once, the first time that the app loads
  componentDidMount() {   
  }

  defaultWebPage = () => {
    return (<Route path={"/"} component={LandingPage} />);
  }

  render () {

/*    
    const offlineStyle = {
      height: 40,
      width: '100%',
      backgroundColor: 'red',
      color: '#FFFFFF',
      fontWeight: '600',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    };
*/    

    return (
      <div>
{/*        <Online> */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route path="/Landing" component={LandingPage} />
              <Route path="/Currencies" component={CurrenciesPage} />
              <Route path="/RoomTypes" component={RoomTypesPage} />
              <Route path="/MealPlans" component={MealPlansPage} />
              <Route path="/PrestoExclusions" component={PrestoExclusionsPage} />
              <Route path="/TicketExceptions" component={TicketExceptionsPage} />
              <Route path="/TicketClassExceptions" component={TicketClassExceptionsPage}/>
              <Route path="/PreferredRoutes" component={PreferredRoutesPage}/>
              <Route path="/ExchRates" component={ExchRatesPage}/>
              <Route path="/Taxes" component={TaxesPage}/>
              <Route path="/TaxRates" component={TaxRatesPage}/>
              <Route path="/EntryTaxes" component={EntryTaxesPage}/>
              <Route path="/Margins" component={MarginsPage}/>
              <Route path="/BoardCaptions" component={BoardCaptionsPage}/>
              <Route path="/AddressbookCategories" component={AddressbookCategoriesPage}/>
              <Route path="/SearchTags" component={SearchTagsPage}/>
              <Route path="/AgentCancellations" component={AgentCancellationsPage}/>
              <Route path="/Consultants" component={ConsultantsPage}/>
              <Route path="/Countries" component={CountriesPage}/>
              <Route path="/States" component={StatesPage}/>
              <Route path="/Cities" component={CitiesPage}/>
              <Route path="/PlaceOfSupply" component={PlaceOfSupplyPage}/>
              <Route path="/Vehicles" component={VehiclesPage}/>
              <Route path="/CarHireAgents" component={CarHireAgentsPage}/>
              <Route path="/CarHireDefaultPerKmAgents" component={CarHireDefaultPerKmAgentsPage}/>
              <Route path="/Distances" component={DistancesPage}/>
              <Route path="/ShortestRoute" component={ShortestRoutePage}/>
              <Route path="/CityGroups" component={CityGroupsPage}/>
              <Route path="/Sightseeing" component={SightseeingPage}/>
              <Route path="/Transfers" component={TransfersPage}/>
              <Route path="/TransferCityPairs" component={TransferCityPairsPage}/>
              <Route path="/Airlines" component={AirlinesPage}/>
              <Route path="/Classes" component={ClassesPage}/>
              <Route path="/AircraftTypes" component={AircraftTypesPage}/>
              <Route path="/TrainCategories" component={TrainCategoriesPage}/>
              <Route path="/TrainDeadlines" component={TrainDeadlinesPage}/>
              <Route path="/TrainStations" component={TrainStationsPage}/>
              <Route path="/FixedItineraries" component={FixedItinerariesPage}/>
              <Route path="/Trains" component={TrainsPage}/>
              <Route path="/Bookings" component={BookingsPage}/>
              <Route path="/Dashboard" component={DashboardPage} />
              <Route path="/CarPerKm" component={CarPerKmPage} />
              <Route path="/CarP2P" component={CarP2pPage} />
              <Route path="/CarCityGroups" component={CarCityGroupsPage} />
              <Route path="/DriveTypes" component={DriveTypesPage} />
              <Route path="/Addressbook" component={AddressbookPage} />
              <Route path="/AddressbookRankings" component={AddressbookRankingsPage} />
              <Route path="/CostAccommodation" component={CostAccommodationPage} />
              <Route path="/CostServices" component={(props) => <CostServicesPage {...props} transfer={false}/>} />              
              <Route path="/CostTransfers" component={(props) => <CostServicesPage {...props} transfer={true}/>} />              
              <Route path="/CopyCostings" component={CopyCostings} />              
              <Route path="/CostReports" component={CostReportsPage} />
              <Route path="/Invoices" component={InvoicePage} />
              <Route path="/InvoiceListing" component={InvoiceListingPage} />              
              <Route path="/InvExchRate" component={InvExchRatePage} />
              <Route path="/InvPymtBeneficiary" component={InvPymtBeneficiaryPage} />
              <Route path="/GenVoucher" component={GenVoucherPage} />
              <Route path="/ListVoucher" component={ListVoucherPage} />
              <Route path="/VoucherSelection" component={VoucherSelectionPage} />
              <Route path="/VoucherMailing" component={VoucherMailingPage} />
              <Route path="/VoucherMailStatus" component={VoucherMailStatusPage} />
              <Route path="/AdmUserPermissions" component={AdmUserPermissionsPage} />
              <Route path="/ChangePassword" component={ChangePasswordPage} />
              
              <Route path="/Elements" component={ElementPage} />
              <Route path="/TrainElementSectors" component={TrainElementSectorsPage} />
              <Route path="/PrincipalAgentNetworks" component={PrincipalAgentNetworksPage} />
              <Route path="/RouteFinder" component={RouteFinderPage} />
              <Route path="/ModuleQuotations" component={ModulesPage} />              
              <Route path="/PrestoList" component={PrestoListPage} />              
              <Route path="/PrestoModuleList" component={PrestoModuleListPage} />              
              <Route path="/PrestoConfirmationManager" component={PrestoConfirmationManagerPage} />                            
              <Route path="/VoucherRemarks" component={VoucherRemarksPage} />                            
              <Route path="/VoucherPayments" component={VoucherPaymentsPage} />                                          
              <Route path="/VoucherDateRangeListing" component={VoucherDateRangeListingPage} />                                          
              <Route path="/AdmUsers"  component={AdmUsersPage} />
              <Route path="/AdmMenuModules"  component={AdmMenuModulesPage} />
              <Route path="/Utilities"  component={UtilitiesPage} />
              
              {this.defaultWebPage()}
            </Switch>
          </div>
        </BrowserRouter>
{/*        </Online> */}
{/*        
        <Offline>
          <div style={pageStyle}>
            <div style={offlineStyle} > You are offline </div>
          </div>
        </Offline>
*/}        
      </div>
    );
  }
};

export default connect() (App);

/*
<Route
  path="/"
  component={props => <MyComponent {...props} foo="lol" />}
*/