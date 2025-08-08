import React from 'react'

const Card = () => {
  return (
    <div className="container w-75 bg-white border rounded p-3 mt-4">
              <div className="card mt-3">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Todos</h3>
                    </div>
                    <div className="col-auto">
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          title="Filter"
                        >
                          <i className="bi bi-funnel"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          title="Sort"
                        >
                          <i className="bi bi-sort-down"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="card-body" className="card-body"></div>
              </div>
            </div>
  )
}

export default Card