function Greating(props){
    const isLoggedIn=PaymentResponse.isLoggedln;
    if(isLoggedIn){
      return <UserGreating/>;
    }
    return <GuestGreating/>;
}
