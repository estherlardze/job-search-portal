import {
    blog1,
    blog2,
    blog3,
    blog4,
    profile1,
    profile2,
    profile3,
    profile4,
  } from '../../assets';
  
  export const blogs = [
    {
      title: '5 Ways Technology Has Improved Business Today',
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have hte suffered alteration in some form, by injected humour, or randomised words which don'tpop lklook even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing",
      newContent:{
        title: "There are many variations of passages of",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have hte suffered alteration in some form, by injected humour, or randomised words which don'tpop lklook even slightly believable. If you are going to use",
        list:[
            "variations of passages of Lorem Ipsum available, but the majority have hte suffere",
            "variations of passages of Lorem Ipsum available, but the majority have hte suffere",
            "variations of passages of Lorem Ipsum available, but the majority have hte suffere"
         ]
      },
      date: 'May 9, 2022',
      imageUrl: blog4,
      featured: true,
      recent: false,
      CompanyPost: false,
      author: {
        name: 'Tilly Thomas', // Replace with the author's name
        profile1: profile4, // Replace with the URL of the author's avatar
      },
    },

    {
      title: '6 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog3,
      featured: false,
      recent: true,
      CompanyPost: false,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile3, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '7 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: false,
      recent: false,
      CompanyPost: true,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile1, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '8 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog2,
      featured: true,
      recent: false,
      CompanyPost: false,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile2, // Replace with the URL of the author's avatar
      },
    },
    {
      title: '9 Ways Technology Has Improved Business Today',
      content:
        'It is a long established fact that a reader will be distracted by the real conten of a page when looking......',
      date: 'October 21, 2023',
      imageUrl: blog1,
      featured: false,
      recent: true,
      CompanyPost: false,
      author: {
        name: 'Alice Smith', // Replace with the author's name
        avatarUrl: profile3, // Replace with the URL of the author's avatar
      },
    },
    // Add more blog objects here
  ];
  