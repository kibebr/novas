import preval from 'next-plugin-preval'

const getArticles = async () => {
  const latest = [
    {
      id: '10',
      title: 'We Read Too app developer Kaya Thomas explores trends in Black literature',
      category: 'NADA',
      date: 'February 12, 2021',
      imgUrl: 'https://assets1.ignimgs.com/2020/06/09/dualsense-1-blogroll-1591733874382.jpg?width=1280'
    },
    {
      id: '11',
      title: 'COVID-19 is now better',
      category: 'COVID-19',
      date: 'March 14, 2003',
      imgUrl: "https://fox8.com/wp-content/uploads/sites/12/2021/02/70EA6AB9B33142159BE0E952C6213837_1.jpg?w=1280"
    },
    {
      id: '12',
      title: 'Testing this',
      category: 'TEST',
      date: 'March 15, 2005',
      imgUrl: 'https://static01.nyt.com/images/2021/02/21/arts/21rock-triptych/21rock-triptych-facebookJumbo.jpg'
    },
    {
      id: '13',
      title: 'I could use a little rain beating on the windowpane',
      category: 'TEST',
      date: 'March 15, 2005',
      imgUrl: 'https://s.yimg.com/uu/api/res/1.2/pg74RPc.JVYhYAN0rtagxQ--~B/aD00OTM7dz04NzI7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/profootballtalk.nbcsports.com/30baf9a8664a95e28075ef60dc820e3d'
    },
    {
      id: '14',
      title: 'Third stimulus check: Why some people should file their taxes ASAP',
      category: 'TAXES',
      date: 'July 14, 2021',
      imgUrl: 'https://cbsnews1.cbsistatic.com/hub/i/r/2020/11/10/fb03a5a5-fd82-49ca-9b1e-adeea6135f62/thumbnail/1200x630/44c8033c14d74f96c0c596ad280e6138/gettyimages-1218079974-1.jpg'
    },
    {
      id: '15',
      title: 'Third stimulus check: Why some people should file their taxes ASAP',
      category: 'TAXES',
      date: 'July 14, 2021',
      imgUrl: 'https://images.wsj.net/im-299288/social'
    }
  ]

  const covid = [
    {
      id: '16',
      title: 'These are the COVID-19 vaccine prospects that have made it to phase three trials and beyond.',
      category: 'COVID-19',
      date: 'July 15, 2021',
      imgUrl: 'https://www.nationalgeographic.com/content/dam/science/2021/01/25/vaccine-tracker/vaccine-1230603423.jpg'
    },
    {
      id: '20',
      title: 'While ER visits were down last year, drug overdoses increased amid pandemic',
      category: 'COVID-19',
      date: 'July 22, 2020',
      imgUrl: 'https://www.gannett-cdn.com/presto/2021/02/12/USAT/c5d33b77-31b9-48ec-9f22-0aae9fe6febe-AFP_AFP_8WY3DK.jpg?crop=4779,2689,x0,y0&width=3200&height=1680&fit=bounds'
    },
    {
      id: '21',
      title: 'Travellers at Victorian coronavirus quarantine hotel, Holiday Inn Flinders Lane, transferred after water damage',
      category: 'COVID-19',
      date: 'July 23, 1940',
      imgUrl: 'https://www.abc.net.au/cm/rimage/12979686-16x9-large.jpg?v=3'
    }
  ]

  const entertainment = [
    {
      id: '17',
      title: "In Pics: Dia Mirza Makes a Stunning Bride in Red Saree as She Poses with Hubby Vaibhav Rekhi.",
      category: 'ENTERTAINMENT',
      date: 'December 01, 2020',
      imgUrl: 'https://cbsnews1.cbsistatic.com/hub/i/r/2021/02/15/5a081be9-48ea-4ed5-9a5f-77729145bde6/thumbnail/1200x630/89c5a98d2749db1a4e86b09ba3a9c2f3/gettyimages-1205919504.jpg'
    },
    {
      id: '18',
      title: 'Meghan Trainor shares another Instagram photo of new baby boy Riley',
      category: 'ENTERTAINMENT',
      date: 'December 12, 2020',
      imgUrl: 'https://s.yimg.com/uu/api/res/1.2/Hjwo1zae11J46X8GiNKqqw--~B/aD00NDU7dz04ODc7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/elle_570/182bd0fceb13ec1130122dccbb3c2262'
    },
    {
      id: '19',
      title: "6ix9ine Docuseries Director Says Rapper Is 'Truly a Horrible Human’",
      category: 'ENTERTAINMENT',
      date: 'July 12, 1950',
      imgUrl: 'https://s.yimg.com/uu/api/res/1.2/AIRD6ESwbVH6NvwCdeLC1g--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/complex584/7263e1b9020975061661daad55bd7a07'
    }
  ]

  return {
    all: [...latest, ...covid, ...entertainment],
    latest,
    covid,
    entertainment
  }
}

export default preval(getArticles())
