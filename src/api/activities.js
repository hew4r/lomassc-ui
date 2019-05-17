export const apiGet = (url) => () => fetch(url).then(v => v.json());

export const apitPut = (url, codAct, obj) => () =>
    fetch(`${url}/${codAct}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
        
        return r;
    });

export const apiPost = (url, obj) => () =>
    fetch(url,  {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if(r.error) {
            return Promise.reject(r.validation)
        }
        
        return r;
    });

export const apiDel = (url, codAct) => () =>
    fetch(`${url}/${codAct}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
    
        return codAct;
    });

