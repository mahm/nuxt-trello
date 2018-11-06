export const state = () => ({
  data: [
    { id: 1, body: 'sample_1_1', listId: 1 },
    { id: 2, body: 'sample_1_2', listId: 1 },
    { id: 3, body: 'sample_1_3', listId: 1 },
    { id: 4, body: 'sample_2_1', listId: 2 },
    { id: 5, body: 'sample_2_2', listId: 2 },
    { id: 6, body: 'sample_3_1', listId: 3 }
  ]
})

export const mutations = {}

export const actions = {}

export const getters = {
  cardsByList: state => listId => {
    return state.data.filter(card => card.listId === listId)
  }
}