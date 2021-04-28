
/*First

const app = Vue.createApp ({
    template: '<h1>Hello {{firstName}} </h1>',
    data() {
        return {
            firstName: 'John'
        }
    }
})
app.mount('#app')*/


/*Second remove template here

const app = Vue.createApp ({
    data() {
        return {
            firstName: 'John'
        }
    }
})

app.mount('#app')*/

/*third
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
})
app.mount('#app')*/

/*four
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
})
app.mount('#app') */

/*Five
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
})
app.mount('#app')*/

/*six methods butona bastıkça frond end yükselir
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            console.log(this.firstName);
        } 
    }
})
app.mount('#app')*/

/*seven kadın
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Sam'
            this.lastName = 'Smith'
            this.email ='sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }, 
    },
})
app.mount('#app')*/

/*eight 
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json ()

            console.log(results)
            this.firstName = 'Sam'
            this.lastName = 'Smith'
            this.email ='sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }, 
    },
})
app.mount('#app')*/

/*nine random user
const app = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json ()

           // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }, 
    },
})
app.mount('#app')*/

