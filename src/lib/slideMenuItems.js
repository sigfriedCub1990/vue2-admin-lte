module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Dashboard v1',
        router: {
          name: 'DashboardV1'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'APIExample',
        router: {
          name: 'APIExample'
        }
      }
    ]
  }
]
