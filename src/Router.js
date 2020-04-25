import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkoutpage';
import CategoryPage from './pages/categorypage';
import ProductPage from './pages/productpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/promotions' component={HomePage} />
        <Route exact path='/nouveautes' component={HomePage} />
        
        <Route path='/product/:productId'  render={(props)=><ProductPage {...props} />}/>

        <Route path='/promos' render={(props)=><CategoryPage {...props} catid={1} catname={"Promos"} subcategories={props.subcategories}/>}/>
        <Route path='/nouveautes' render={(props)=><CategoryPage {...props} catid={2} catname={"Nouveautes"} subcategories={props.subcategories}/>}/>
        <Route path='/fruits-legumes' render={(props)=><CategoryPage {...props} catid={4} catname={"Fruits et légumes"} subcategories={props.subcategories}/>}/>
        <Route path='/poissons-viandes' render={(props)=><CategoryPage {...props} catid={5} catname={"Poissons et viandes"} subcategories={props.subcategories}/>}/>
        <Route path='/lait-oeufs' render={(props)=><CategoryPage {...props} catid={6} catname={"Produits laitiers et oeufs"} subcategories={props.subcategories}/>}/>
        <Route path='/pain-traiteur' render={(props)=><CategoryPage {...props} catid={7} catname={"Boulangerie et traiteur"} subcategories={props.subcategories}/>}/>
        <Route path='/surgeles' render={(props)=><CategoryPage {...props} catid={8} catname={"Surgelés"} subcategories={props.subcategories}/>}/>
        <Route path='/epicerie-salee' render={(props)=><CategoryPage {...props} catid={9} catname={"Epicerie salée"} subcategories={props.subcategories}/>}/>
        <Route path='/epicerie-sucree' render={(props)=><CategoryPage {...props} catid={10} catname={"Epicerie sucrée"} subcategories={props.subcategories}/>}/>
        <Route path='/boissons' render={(props)=><CategoryPage {...props} catid={11} catname={"Boissons"} subcategories={props.subcategories}/>}/>
        <Route path='/bebe' render={(props)=><CategoryPage {...props} catid={12} catname={"Bébé"} subcategories={props.subcategories}/>}/>
        <Route path='/hygiene-beaute' render={(props)=><CategoryPage {...props} catid={13} catname={"Hygiène et beauté"} subcategories={props.subcategories}/>}/>
        <Route path='/nettoyage-entretien' render={(props)=><CategoryPage {...props} catid={14} catname={"Nettoyage et entretien"} subcategories={props.subcategories}/>}/>
        <Route path='/maison-loisirs' render={(props)=><CategoryPage {...props} catid={15} catname={"Maisons et loisirs"} subcategories={props.subcategories}/>}/>
        <Route path='/animaux' render={(props)=><CategoryPage {...props} catid={16} catname={"Animaux"} subcategories={props.subcategories}/>}/>
     
    </Switch>
)
export default Router;