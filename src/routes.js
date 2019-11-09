import HomePage from './views/HomePage.jsx'
import ExplorePage from './views/ExplorePage.jsx'
import HotelsPage from './views/HotelsPage.jsx'
import FlightsPage from './views/FlightsPage.jsx'
import TrainPage from './views/TrainPage.jsx'
import MyTripsPage from './views/MyTripsPage.jsx'
import MyBucketListPage from './views/MyBucketListPage.jsx'
import SearchPage from './views/SearchPage.jsx'

export const routes = [
    {
        path: "/",
        component: HomePage,
    }, {
        path: "/explore",
        component: ExplorePage
    }, {
        path: "/hotels",
        component: HotelsPage
    }, {
        path: "/flights",
        component: FlightsPage
    }, {
        path: "/train",
        component: TrainPage
    }, {
        path: "/my-trips",
        component: MyTripsPage
    }, {
        path: "/my-bucket-list",
        component: MyBucketListPage
    }, {
        path: "/search",
        component: SearchPage
    }
]