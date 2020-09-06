import React, {useEffect, useState, useRef, useCallback} from 'react';

import AOS from 'aos';

import './App.css';

import LazyImage from './LazyImage'

const  items1 = [
  {
      id:1, "source": "./images/pic1_d.jpg", 
      "height": 522, "width": 400, "category":"design"}, 
  {
      id:2,"source": "./images/pic1_p.jpg", 
      "height": 214, "width": 400, "category":"photography"}, 

  {
      id:4,"source": "./images/pic2_p.jpg", 
      "height": 250, "width": 400, "category":"photography"}, 
  {
      id:5,"source": "./images/pic3_d.jpg",
       "height": 303, "width": 400, "category":"design"}, 
  {
      id:6,"source": "./images/pic3_p.jpg", 
      "height": 299, "width": 400, "category":"photography"}, 
  {
      id:7,"source": "./images/pic4_d.jpg",
       "height": 303, "width": 400, "category":"design"}, 
  {
      id:8,"source": "./images/pic4_p.jpg", 
      "height": 264, "width": 400, "category":"photography"} ,

  {
      id:9, "source": "./images/pic5_d.jpg", 
      "height": 303, "width": 400, "category":"design"}, 
  {
      id:10, "source": "./images/pic5_p.jpg", 
      "height": 390, "width": 400, "category":"photography"}, 
  {
      id:11, "source": "./images/pic6_d.jpg", 
      "height": 574, "width": 400, "category":"design"}, 
  {
      id:12, "source": "./images/pic6_p.jpg", 
      "height": 266, "width": 400, "category":"photography"}, 
  {
      id:13, "source": "./images/pic7_d.jpg", 
      "height": 679, "width": 400, "category":"design"}, 
  {
      id:14, "source": "./images/pic8_p.jpg", 
      "height": 279, "width": 400, "category":"photography"}, 
  {
      id:15, "source": "./images/pic8_d.jpg", 
      "height": 713, "width": 400, "category":"design"},
    // ]
    
      // let items3 = [  
  {
      id:16, "source": "./images/pic7_p.jpg", 
      "height": 220, "width": 400, "category":"photography"},    
  {
      id:17, "source": "./images/pic9_d.jpg", 
      "height": 479, "width": 400, "category":"design"},    
  {
      id:18, "source": "./images/pic9_p.jpg", 
      "height": 266, "width": 400, "category":"photography"},    
  {
      id:19, "source": "./images/pic10_d.jpg", 
      "height": 347, "width": 400, "category":"design"},
  {
      id:20, "source": "./images/pic10_p.jpg", 
      "height": 400, "width": 400, "category":"photography"},
  {
      id:21, "source": "./images/pic11_d.jpg", 
      "height": 347, "width": 400, "category":"design"},  
  {
      id:22, "source": "./images/pic12_d.jpg", 
       "height": 690, "width": 400, "category":"design"},
  {
      id:3,"source": "./images/pic2_d.jpg", 
        "height": 303, "width": 400, "category":"design"}, 
]

function App() {
 
    let windowWidth = window.innerWidth
    let no_of_columns = (windowWidth > 1382 ) ? 3 : ((windowWidth <= 1382 ) &&  (windowWidth > 982 )) ?  2 : 1

   const [items, setItems ] = useState([])
    const [columns, setColumns] = useState(no_of_columns)
    // console.log(items)

    const data = useEffect(() => {
      fetch('https://picsum.photos/v2/list?page=2&limit=30')
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
    

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <header className="view title" data-aos='fade-up'>CUT AND PASTED
  //     </header>
  //     <section className="main">
     
  //       {columns===3 && 
  //         <div class="group group1">
  //         {items
  //         .filter((i,index) => (i.id) % no_of_columns === 0 )
  //         .map((item,idx) => (
  //             <div key={item.id}>
  //             <LazyImage
  //             src={item.source}
  //             alt={`${item.category} ${item.id}`}
  //             index={item.id}
  //           />
  //       </div>
  //         ))
  //         }
  //         </div>
  //       }
     
  //       { columns>=2 && 
  //         <div class="group group2">
  //           {
  //             items
  //             .filter((i,index) =>  (i.id + 2) % no_of_columns === 0 )
  //             .map((item,idx) => (
  //               <div key={item.id}>
  //                   <LazyImage
  //                   src={item.source}
  //                   alt={`${item.category} ${item.id}`}
  //                   index={item.id}
  //                 />
  //               </div>
  //             ))
              
  //           }
  //         </div>
  //       }
            
  //       { columns>=1 && 
  //         <div class="group group3">
  //           {
  //             items
  //               .filter((i,index) =>  (i.id + 1) % no_of_columns === 0 )
  //               .map((item,idx) => (
  //                 <div key={item.id}>
  //                   <LazyImage
  //                     src={item.source}
  //                     alt={`${item.source} ${item.id}`}
  //                     index={item.id}
  //                   />
  //                 </div>
  //               ))
  //           }
  //         </div>
  //       }
  //     </section>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      <header className="App-header">
      <header className="view title" data-aos='fade-up'>CUT AND PASTED
      </header>
      <section className="main">

      {
      items
        // .filter((i,index) =>  (index+ 2) % no_of_columns === 0 )
        .map((item,idx) => (
          <div key={item.id}>
              <LazyImage
              src={item.download_url}
              alt={`${item.author} ${item.id}`}
              index={item.id}
            />
          </div>
        ))}



      {/** 
        {columns===3 && 
          <div class="group group1">
          {items
          .filter((i,index) => index % no_of_columns === 0 )
          .map((item,idx) => (
              <div key={item.id}>
              <LazyImage
              src={item.download_url}
              alt={`${item.author} ${item.id}`}
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
              .filter((i,index) =>  (index+ 2) % no_of_columns === 0 )
              .map((item,idx) => (
                <div key={item.id}>
                    <LazyImage
                    src={item.download_url}
                    alt={`${item.author} ${item.id}`}
                    index={item.id}
                  />
                </div>
              ))}
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
                      alt={`${item.author} ${item.id}`}
                      index={item.id}
                    />
                  </div>
                ))
            }
          </div>
        }
        */}
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

        