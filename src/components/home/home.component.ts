import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, NgbCarouselModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'section-heading-tag';
  sectionHeaderTitle:any;

  headTitle:string=`BUSINESS <span>CHALLENGES</span>? <br>WE'VE GOT YOU.`

  constructor(config:NgbCarouselConfig, private http: HttpClient){
    config.interval = 10000;
  }

  ngOnInit() {
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.sectionHeaderTitle = data.id;
  })
  }

  // ngOnInit() {
  //   AOS.init();
  // }

  banner = [
    {
      title: 'Prepare all installation and selection',
      description: `documents for all mechanical equipment.`,
    },
    {
      title: 'Inspect all mechanical equipment and analyze',
      description: 'all types of equipment and ensure adherence to all present technology.',
    },
    {
      title: 'Analyze all mechanical designs and prepare',
      description: `various concepts for piping designs and develop required mechanical drawings.`,
    }
    ,
    {
      title: 'Develop new methods to recommend improvements ',
      description: `to all activities of the piping section.`,
    }
  ];
  serviceInfo = [
    {
      title: 'IT Management',
      description: 'Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime',
    },
    {
      title: 'Database Security',
      description: 'Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime'
    },
    {
      title: 'Analytic Solutions',
      description: `Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime`
    }
  ];
  mainList = [
    { name: 'Product', routerlink: 'Product' },
    { name: 'Advance Solution', routerlink: 'AdvanceSolution' },
    { name: 'AI & Automation', routerlink: 'ai' },
  ];


  learn = [
    {
      icon:"#icon_bizSolution",
      title: 'Plant Setup and Layout'
    },
    {
      icon:"#icon_talent",
      title: 'Equipment Layout'
    },
    {
      icon:"#icon_products",
      title: 'Piping placement and Layout'
    },
    {
      icon:"#icon_marketInsights",
      title: 'Piping Materials'
    },
    {
      icon:"#icon_marketInsights",
      title: 'Piping Supports'
    },
    {
      icon:"#icon_marketInsights",
      title: 'Piping Stress Analysis'
    },
    {
      icon:"#icon_marketInsights",
      title: 'CAD or 3D Modeling'
    }
  ];

  ourSeccess = [
    {
      icon:"#icon_safeguard",
      title: 'Business Solutions'
    },
    {
      icon:"#icon_sanitation",
      title: 'Talent Solutions'
    },
    {
      icon:"#icon_expertise",
      title: 'Our Products'
    },
    {
      icon:"#icon_recycling",
      title: 'Market Insights'
    }
  ];

  testimonials = [
    {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'Elizabeth McConnell | VP of Operations | iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    },
    {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'VP of Operations ',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: ' iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'Elizabeth McConnell | VP of Operations | iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'Elizabeth McConnell | VP of Operations | iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'Elizabeth McConnell | VP of Operations | iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }, {
      name:"Watch Elizabeth's Entire Testimonial",
      title: 'Elizabeth McConnell | VP of Operations | iLabor360',
      description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
    }
  ];

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfigService = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-medium">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
    prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-medium">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
  slideConfigPartner = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true, 
    nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-ex-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
    prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-ex-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
  slideConfigTestimonials = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
    prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };

  slideConfigExpertView = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    nextArrow: `<div class='slick-prev slick-arrow'>  <i class="icon icon-ex-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowLeft"></use>
    </svg>
  </i></div>`,
    prevArrow: `<div class='slick-next slick-arrow'>  <i class="icon icon-ex-small">
    <svg focusable="false">
      <use xlink:href="#icon_arrowRight"></use>
    </svg>
  </i></div>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  expertView =[ 
    {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  },
  {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  },
  {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  },
  {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  },
  {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  },
  {
    cardTitle:"",
    date:"Watch Elizabeth's Entire Testimonial",
    title: 'Elizabeth McConnell | VP of Operations | iLabor360',
    description: `ModernFilm Creative team conveyed our company in the utmost light. We got to showcase all the different aspects we wanted to with their helpful planning and execution, and just listening to our feedback. . . . They met and exceeded expectations with the final product.`,
  }
]

}
