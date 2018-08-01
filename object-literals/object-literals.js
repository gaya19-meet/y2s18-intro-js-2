// Create your 'me' object literal here!
var me = {
	firstName : "gaya",
	lastName : "goldenberg",
	favoriteFoods : ["pizza" , "apple" , "pear"],
	age : 15.5,
	picture : "https://www.google.com/search?q=dog&client=ubuntu&hs=1Q&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjI0pqevcvcAhWLaFAKHaDFD4IQ_AUICigB&biw=766&bih=637"	
}
var a = JSON.stringify(me)
document.write(a)
