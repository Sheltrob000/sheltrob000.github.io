export default function Join(){
    return(

        <>
            <div className={"contentholder"}>
                <p>hello this how you join the email list</p>
                <p>if I colected and sent emails this is how you would join</p>

                <br/>

                <form>
                    <label>email</label>
                    <br/>
                    <input type="email" id="fname" name="fname"/>
                    <br/>
                    <input type={"checkbox"}/>
                    <label>send announcements like early releases</label>
                    <br/>
                    <input type={"checkbox"}/>
                    <label> announce when the full game is released</label>
                    <br/>
                    <input type={"submit"}/>

                </form>
                <p>I will not steal your data</p>


            </div>


        </>

    )
}