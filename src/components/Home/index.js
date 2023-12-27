import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {HiOutlineShoppingCart} from 'react-icons/hi'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MenuCardItems from '../MenuCardItems'

import './index.css'

class Home extends Component {
  state = {menuList: [], presentTab: ''}
  componentDidMount() {
    this.renderApiCall()
  }

  renderApiCall = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data[0].table_menu_list[0].menu_category)
    this.setState({menuList: data[0].table_menu_list})
  }

  currentTab = id => {
    this.setState({presentTab: id})
  }

  render() {
    const {menuList, presentTab} = this.state
    console.log(menuList)
    const newMenuList = menuList.filter(eachMenu => {
      if (eachMenu.menu_category_id === presentTab) {
        return eachMenu
      }
      return null
    })
    const newMenuItems = newMenuList[0].category_dishes


    console.log(newMenuItems)
    return (
      <div className="bg-container">
        <navbar className="nav-container">
          <h1 className="main-heading">UNI Resto Cafe</h1>
          <div className="order-container">
            <p className="para">My Orders</p>
            <HiOutlineShoppingCart className="icon" />
          </div>
        </navbar>
        <hr className="line" />
        <ul className="list-container">
          {menuList.map(eachItem => (
            <MenuCardItems
              key={eachItem.menu_category_id}
              tabDetails={eachItem}
              currentTab={this.currentTab}
            />
          ))}
        </ul>
        <hr className="line" />
      </div>
    )
  }
}

export default Home
