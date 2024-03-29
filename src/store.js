import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    colors: [ '#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934', 'Purple' ],
    selectedColor: '#EFBD4E',
    decals: [ 'react', 'three2', 'pmndrs' ],
    selectedDecal: 'three2'
})

export { state }
