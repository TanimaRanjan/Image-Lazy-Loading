import React, {useEffect, useState, useRef, useCallback} from 'react';

import AOS from 'aos';

import './App.css';

import LazyImage from './LazyImage'

function App() {
 
    let windowWidth = window.innerWidth
    let no_of_columns = (windowWidth > 1382 ) ? 3 : ((windowWidth <= 1382 ) &&  (windowWidth > 982 )) ?  2 : 1

    const [items, setItems ] = useState([])
    const [columns, setColumns] = useState(no_of_columns)
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
        let no_of_columns = (windowWidth > 1382 ) ? 3 : ((windowWidth <= 1382 ) &&  (windowWidth > 982 )) ?  2 : 1
        setColumns(no_of_columns)
  
      });

   
    }, [width, columns])
    console.log('width ', width, columns)
    


  return (
    <div className="App">
      <header className="App-header">
      <header className="view title" data-aos='fade-up'>CUT AND PASTED
      </header>
      <section className="main">
     
        {columns===3 && 
          <div class="group group1">
          {items
          .filter((i,index) => (index) % no_of_columns === 0 )
          .map((item,idx) => (
              <div key={item.id}>
              <LazyImage
              src={item.download_url}
              alt={`${item.author}`}
              index={item.id}
            />
        </div>
          ))
          }
          </div>
        }
     
        { columns>=2 && 
          <div class="group group2">
            {
              items
              .filter((i,index) =>  (index + 2) % no_of_columns === 0 )
              .map((item,idx) => (
                <div key={item.id}>
                    <LazyImage
                    src={item.download_url}
                    alt={`${item.author}`}
                    index={item.id}
                  />
                </div>
              ))
              
            }
          </div>
        }
            
        { columns>=1 && 
          <div class="group group3">
            {
              items
                .filter((i,index) =>  (index + 1) % no_of_columns === 0 )
                .map((item,idx) => (
                  <div key={item.id}>
                    <LazyImage
                      src={item.download_url}
                      alt={`${item.author}`}
                      index={item.id}
                    />
                  </div>
                ))
            }
          </div>
        }
      </section>
      </header>
    </div>
  );
}

export default App;


/* {items  && items.length> 0 && items.map((item, index) => {
       
           return  <div key={item.id}>
              <LazyImage
                src={item.download_url}
                alt={`${item.author}`}
                index={item.id}
              />
            </div>
          // }
         
        })}*/

        