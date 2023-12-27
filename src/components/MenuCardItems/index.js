import './index.css'

const MenuCardItems = props => {
  const {tabDetails, currentTab} = props
  const {menu_category, menu_category_id} = tabDetails

  const onClickTab = () => {
    currentTab(menu_category_id)
  }

  return (
    <li className="list-item">
      <button className="tab-button" onClick={onClickTab}>
        {menu_category}
      </button>
    </li>
  )
}

export default MenuCardItems
