import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

// Api we are using 
import ApiUrl from '../components/Api';

export const ShoppingCartProvider = ({ children }) => {
	// shopping cart count
	const [count, setCount] = useState(0);

	// Product detail, open/close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Checkout side menu detail, open/close
	const [isCheckoutMenuOpen, setCheckoutMenuOpen] = useState(false);

	const openCheckoutMenu = () => setCheckoutMenuOpen(true);
	const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

	// Product detail, show product detail when the product is clicked
	const [productToShow, setProductToShow] = useState({});

	// Add to cart- shopping cart
	const [productToCart, setProductToCart] = useState([]);

	// Shopping cart -Orders
	const [order, setOrder] = useState([]);

	//Get products
	const [items, setItems] = useState(null);


	// filtered items
	const [filteredItems, setFilteredItems] = useState(null);

	//Search by title
	const [searchByTitle, setSearchByTitle] = useState(null);

	// Search by category 

	const [searchByCategory, setSearchByCategory] = useState(null);


useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await fetch(`${ApiUrl}/products`);
			const data = await response.json();
			setItems(data);
		} catch (error) {
			console.error('Ha ocurrido un error: ${error.message}');
		}
	};

	fetchData();
}, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
	return items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  const filteredItemsByCategory = (items, searchByCategory) => {
	return items?.filter((item) =>
		item.category.toLowerCase().includes(searchByCategory.toLowerCase())
	);
  }

	const filterBy =(searchType, items, searchByTitle, searchByCategory) =>{
		if(searchType ==='BY_TITLE'){
			return filteredItemsByTitle(items, searchByTitle)
		}

		if(searchType ==='BY_CATEGORY'){
			return filteredItemsByCategory(items, searchByCategory)
		}

		if(searchType ==='BY_TITLE_AND_BY_CATEGORY'){
			return filteredItemsByCategory(items, searchByCategory).filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
		}
		if(!searchType){
			return items
		}
	}


  useEffect(() => {
	if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY',items, searchByTitle, searchByCategory));
	if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory));
	if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory));
	if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory));  
  }, [items, searchByTitle, searchByCategory])


	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				productToCart,
				setProductToCart,
				isCheckoutMenuOpen,
				openCheckoutMenu,
				closeCheckoutMenu,
				order,
				setOrder,
				items,
				setItems,
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				setFilteredItems,
				searchByCategory,
				setSearchByCategory
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
