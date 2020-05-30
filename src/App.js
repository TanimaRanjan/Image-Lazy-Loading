import React, {useEffect, useState, useRef, useCallback} from 'react';

import AOS from 'aos';

import './App.css';

import LazyImage from './LazyImage'

function App() {
 
    const [items, setItems ] = useState([])
    console.log(items)
    const data = useEffect(() => {

      fetch('https://picsum.photos/v2/list?page=1&limit=20')
      .then(response => response.json()) 
      .then(data => {
        console.log(data)
        setItems(data)
      } )
   
    }, [])

    // console.log(data)
    // setItems(data)
    // const [pageNo, setPageNo] = useState(1)

    // const observer = useRef()

    // const lastElement = useCallback(node => {
    //   if(observer.current) observer.current.disconnect()
    //   observer.current = new IntersectionObserver(entries => {
    //     if(entries[0].isIntersecting) {
    //       setPageNo(pageNo + 1 )

    //       fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=20`)
    //       .then(response => response.json()) 
    //       .then(data => setItems([...items, ...data]))
         
    //     }
    //   })
    //   if(node) observer.current.observe(node)

    // }, [pageNo, items]) 

    let width = document.body.clientWidth
    useEffect(() => {
      const width = document.body.clientWidth
      window.addEventListener("resize", (event) => {

        console.log('window width ', window.innerWidth)
        let windowWidth = window.innerWidth
        let no_of_columns = (windowWidth > 786 ) ? 3 : ((windowWidth <= 786 ) &&  (windowWidth > 486 )) ?  2 : 1
        console.log('No of columns to print ', no_of_columns, items.length)

        let no_of_items = Math.ceil(20 / no_of_columns)
        let fullList = []
        console.log('no of items ', no_of_items)
        for(let i=0;i<no_of_columns;i++) {
            let end = ((i+1)*no_of_items)
            console.log('For i = ', i, end)
            let list = []
            for(let j=i*no_of_items;j<end;j++) {
                list.push(items[j])
            }
            fullList.push(list)
          //  console.log(list)
        }

        console.log(fullList)
      });

   
    }, [width])
    console.log('width ', width)
    


  return (
    <div className="App">
      <header className="App-header">
      <header className="view title" data-aos='fade-up'>CUT AND PASTED
      </header>
      <section className="main">
      {items  && items.length> 0 && items.map((item, index) => {
       
          // if(items.length === index+ 1) {
          // return  <div key={item.id} ref={lastElement} >
          //     <LazyImage
          //       src={item.download_url}
          //       alt={`${item.author}`}
          //       index={item.id}
          //     />
          //   </div>
          // } else {
           return  <div key={item.id}>
              <LazyImage
                src={item.download_url}
                alt={`${item.author}`}
                index={item.id}
              />
            </div>
          // }
         
        })}
      </section>
      </header>
    </div>
  );
}

export default App;
