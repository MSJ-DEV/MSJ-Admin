
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
import React, { Component } from 'react'
import Carousel from "react-elastic-carousel"

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      items: [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}
      ]
    }
  }
  render() {
    const slides = [
  'https://image.isu.pub/140413194818-e3ef4e62b103942230e2a37474426296/jpg/page_1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC5RDfRNB-U2Zzbk88iESXkXTl0DEgfeEmg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthkWsIdGnVANyJHUYQFsEMvql4BIIUsDNqg&usqp=CAU',
]
const breakPoints = [
  { width: 1, itemsToShow: 4 },
];

    return (
      <CRow>
      <CCol xs="12" xl="6">
        <CCard>
           <div class="title1">
      <h1>
        <span style={{"--i":"1"}} >P</span>
        <span style={{"--i":"2"}}>r</span>
        <span style={{"--i":"3"}}>o</span>
        <span style={{"--i":"4"}}>d</span>
        <span style={{"--i":"5"}}>u</span>
        <span style={{"--i":"6"}}>c</span>
        <span style={{"--i":"7"}}>t</span>
        <span style={{"--i":"8"}}>-</span>
        <span style={{"--i":"9"}}>P</span>
        <span style={{"--i":"10"}}>r</span>
        <span style={{"--i":"11"}}>o</span>
        <span style={{"--i":"12"}}>m</span>
        <span style={{"--i":"13"}}>o</span>
        <span style={{"--i":"14"}}>t</span>
        <span style={{"--i":"15"}}>i</span>
        <span style={{"--i":"16"}}>o</span>
        <span style={{"--i":"17"}}>n</span>
    </h1>
       </div>
          <CCardBody>
            <CCarousel animate autoSlide={5000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                  {slides.map((e,i)=>
                   <CCarouselItem key={i}>
                  <img className="image" src={e} alt="slide 1"/>
                </CCarouselItem>
                  )}
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
        
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>
           <div class="title1">
      <h1>
        <span style={{"--i":"1"}} >P</span>
        <span style={{"--i":"2"}}>r</span>
        <span style={{"--i":"3"}}>o</span>
        <span style={{"--i":"4"}}>d</span>
        <span style={{"--i":"5"}}>u</span>
        <span style={{"--i":"6"}}>c</span>
        <span style={{"--i":"7"}}>t</span>
        <span style={{"--i":"8"}}>-</span>
        <span style={{"--i":"9"}}>P</span>
        <span style={{"--i":"10"}}>r</span>
        <span style={{"--i":"11"}}>o</span>
        <span style={{"--i":"12"}}>m</span>
        <span style={{"--i":"13"}}>o</span>
        <span style={{"--i":"14"}}>t</span>
        <span style={{"--i":"15"}}>i</span>
        <span style={{"--i":"16"}}>o</span>
        <span style={{"--i":"17"}}>n</span>
    </h1>
       </div>
          <CCardBody>
            <CCarousel animate autoSlide={5000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                  {slides.map((e,i)=>
                   <CCarouselItem key={i}>
                  <img className="image" src={e} alt="slide 1"/>
                </CCarouselItem>
                  )}
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard>
        
      </CCol>
      <Carousel breakPoints={breakPoints}>
      {this.props.data.map((element, index) => {
                        return <div className="card-product">
                        <img className="card-image" src={element.image} />
                        </div>
                    })}
      </Carousel>
    )
      {/* <div className="card-product">
					<img className="card-image" src={this.props.data.image} />
					</div> */}
    </CRow>
    )
  }
}
