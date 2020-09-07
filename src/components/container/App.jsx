import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Homepage} from "../../pages/homepage/Homepage";
import {CategoryOne} from "../categories/CategoryOne";
import {CategoryTwo} from "../categories/CategoryTwo";
import {CategoryThree} from "../categories/CategoryThree";
import {CategoryFour} from "../categories/CategoryFour";
import {CategoryFive} from "../categories/CategoryFive";
import {ShopPage} from "../../pages/shop/ShopPage";
import {Header} from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

export class App extends Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth)
                    // userRef.onSnapshot(snapshot => console.log(snapshot.data()))
                    userRef.onSnapshot(snapshot => this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }))
                } else {
                    this.setState({currentUser: userAuth})
                }
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <BrowserRouter>
                    <Header currentUser={this.state.currentUser}/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/signin" component={SignInUp}/>

                        <Route path="/category_1" component={CategoryOne}/>
                        <Route path="/category_2" component={CategoryTwo}/>
                        <Route path="/category_3" component={CategoryThree}/>
                        <Route path="/category_4" component={CategoryFour}/>
                        <Route path="/category_5" component={CategoryFive}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}