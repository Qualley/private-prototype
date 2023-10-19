window.addEventListener("load", () => {
    console.log("page is fully loaded");
    document.querySelectorAll('iframe').forEach( item =>
        console.log(item.contentWindow.document.body.querySelectorAll('.mobile_download_prompt--overlay--Xsp5l'))
    )
  });