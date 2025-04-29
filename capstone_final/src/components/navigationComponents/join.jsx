export default function Join(){
    let email = "";
    let announcegeneral = false
    let announcerelease = false



    function handleSubmit() {
        email = document.getElementById("fname").innerHTML
        announcegeneral = document.getElementById("ealrlyAnnounce").innerHTML
        announcerelease = document.getElementById("fullRealase").innerHTML

    }
    return(

        <>
            <div className={"contentholder"}>
                <p>hello this how you join the email list</p>
                <p>if I colected and sent emails this is how you would join</p>

                <br/>

                <form onSubmit={handleSubmit} name={"emailList"}>
                    <label>email</label>
                    <br/>
                    <input type="email" id="fname" name="fname"/>
                    <br/>
                    <input type={"checkbox"} id={"ealrlyAnnounce"} name={"ealrlyAnnounce"}/>
                    <label>send announcements like early releases</label>
                    <br/>
                    <input type={"checkbox"} id={"fullRealase"} name={"fullRealase"}/>
                    <label> announce when the full game is released</label>
                    <br/>
                    <input type={"submit"}/>

                </form>
                <p>I will not steal your data</p>


            </div>


        </>

    )
}