const app = new Vue({
    el: '#app',
    data: {
      products: [
        { name: 'Rafl-2', description: 'Описание дивана 1. Здесь более подробное описание товара.', quantity: 5, image: 'img/1й.png' },
        { name: 'Loko PRO', description: 'Описание дивана 2. Здесь более подробное описание товара.', quantity: 13, image: 'img/2й.png' },
        { name: 'Carina Nova', description: 'Описание дивана 3. Здесь более подробное описание товара.', quantity: 8, image: 'img/3й.png' }
      ],
      cart: [], 
      showModal: false, 
      newProduct: {
        name: '',
        description: '',
        quantity: 0,
        image: ''
      }
    },
    methods: {
      addToCart(index) {
        if (this.products[index].quantity > 0) {
          const item = this.cart.find(item => item.name === this.products[index].name);
          if (item) {
            item.quantity += 1;
          } else {
            this.cart.push({ ...this.products[index], quantity: 1 });
          }
          this.products[index].quantity -= 1;
        }
      },
      removeFromCart(index) {
        const item = this.cart[index];
        const productIndex = this.products.findIndex(product => product.name === item.name);
        this.products[productIndex].quantity += 1;
        item.quantity -= 1; 
        if (item.quantity === 0) { 
          this.cart.splice(index, 1);
        }
      },
      checkout() {
        if (this.cart.length > 0) {
          alert('Спасибо за покупку!');
          this.cart = [];
        }
      },
  
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.newProduct.image = URL.createObjectURL(file);
        }
      },
  
      addNewProduct() {
        this.products.push({ ...this.newProduct });
        this.newProduct = {
          name: '',
          description: '',
          quantity: 0,
          image: ''
        };
        this.showModal = false;
      }
    }
  });
