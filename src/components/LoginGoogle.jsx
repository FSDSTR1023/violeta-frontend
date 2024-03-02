import React, { useEffect} from 'react'

export const LoginGoogle = () => {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Credential: " + response.credential)
    }

        useEffect(() => {
            /* global google */
            google.accounts.id.initialize({
                client_id: "1044038069280-pd5c77qrtgkoo97f7ri5o5gpsqng2rte.apps.googleusercontent.com",
                callback: handleCallbackResponse
            })

            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            )
        }, []);

  return (
    <div id="signInDiv"></div>
  )
}
