import React from 'react'

export default function Dining() {
    
    return (
    <>
            <div className='dining'>
                 <div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
                <h3 className='top-text'>Dining</h3>
				</div>
			</div>
		    </div>
      
    </div>
    <div className='dining-gallery'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                <div className='dining-inner'><img src={require('./assets/food1.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div>
                </div> 
                </div>
                <div className='col-md-4'>
                            <div className='dining-inner'><img src={require('./assets/food2.jpg')} alt="" />
                              <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
                <div className='col-md-4'>
                            <div className='dining-inner'><img src={require('./assets/food3.jpg')} alt="" />
                              <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '30px' }} >
                <div className='col-md-4'>
                <div className='dining-inner'><img src={require('./assets/food4.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div>
                </div> 
                </div>
                <div className='col-md-4'>
                    <div className='dining-inner'><img src={require('./assets/food5.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
                <div className='col-md-4'>
                    <div className='dining-inner'><img src={require('./assets/food6.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
                    </div>
                                <div className='row' style={{ marginTop: '30px' }} >
                <div className='col-md-4'>
                <div className='dining-inner'><img src={require('./assets/food7.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div>
                </div> 
                </div>
                <div className='col-md-4'>
                    <div className='dining-inner'><img src={require('./assets/food8.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
                <div className='col-md-4'>
                    <div className='dining-inner'><img src={require('./assets/food9.jpg')} alt="" />
                    <div className="why-text"><h4>Special Drinks 1</h4><p>Sed id magna vitae eros sagittis euismod.</p><h5> $7.79</h5></div></div>
                </div>
            </div>
        </div>
    </div>
    </> 
  )
}
