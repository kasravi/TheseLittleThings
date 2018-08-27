const services = {
    getThings: function (id, date) {
        if(!id) {
            return [];
        } else {
            return list; 
        }
    },
    saveThing : function(data) {

    },
    saveDream : function(data) {
        
    },
    saveLoved : function(data) {
        
    },
    saveSelf : function(data) {
        
    }
}

export default services;

const list = [
    {
      key:0,
      id: "0",
      date: (new Date()).toDateString(),
      isaThing: true,
      thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
    },
    {
      key:1,
      id: "0",
      date: (new Date()).toDateString(),
      isaThing: true,
      thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
    },
    {
      key:2,
      id: "0",
      date: (new Date()).toDateString(),
      isaThing: true,
      thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
    },
    {
      key:3,
      id: "0",
      isaDream: true,
      thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
      keys: "food,drink"
    },
    {
      key:4,
      id: "0",
      isaDream: true,
      thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
      keys: "food"
    },
    {
        key:5,
        id: "1",
        isaDream: true,
        thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
        keys: "food"
      },
      {
        key:6,
        id: "2",
        isaDream: true,
        thing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum elementum metus ut faucibus. Vestibulum volutpat orci bibendum libero fermentum laoreet. Suspendisse potenti.",
        keys: "food"
      }
  ]