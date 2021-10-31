import React, { useRef } from 'react';

const AddService = () => {
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();

    const handleAddService = e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const newService = { title: title, description: description, price: price, image: image };
        fetch('https://ghastly-mummy-59087.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Service inserted successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div className="container mx-auto">
            <h2 className="text-center mt-4 mb-3">Add service to homepage dynamically</h2>
            <form onSubmit={handleAddService} className="mx-auto">
                <div className="row mb-2">
                    <div className="col-md-5 mx-auto">
                        <label htmlFor="inputTitle" className="form-label">Service Title</label>
                        <input type="text" ref={titleRef} className="form-control" id="inputTitle" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-5 mx-auto">
                        <label htmlFor="inputDesc" className="form-label">Description</label>
                        <textarea type="text" ref={descRef} className="form-control" id="inputDesc" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-5 mx-auto">
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <input type="text" ref={priceRef} className="form-control" id="inputPrice" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-5 mx-auto">
                        <label htmlFor="inputImage" className="form-label">Image url</label>
                        <input type="text" ref={imageRef} className="form-control" id="inputImage" />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-5 mx-auto">
                        <input type="submit" className="btn btn-primary d-block mx-auto px-4" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;