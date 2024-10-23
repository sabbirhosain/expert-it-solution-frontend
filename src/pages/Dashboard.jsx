import { MdAttachMoney } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import { MdCoPresent } from "react-icons/md";

import Layout from '../layout/Layout'

const Dashboard = () => {
  return (
    <Layout>
      <section className='container-fluid'>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <MdAttachMoney /> </div>
                  <div> <h4>0 TK</h4> <span>Total Amount</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <GiExpense /> </div>
                  <div> <h4>5,0000 TK</h4> <span>Total Expense</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <PiStudent /> </div>
                  <div> <h4>10</h4> <span>Total Student's</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <MdCoPresent /> </div>
                  <div> <h4>10</h4> <span>Present Student's</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <MdCoPresent /> </div>
                  <div> <h4>10</h4> <span>Absent Student's</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <IoMdPersonAdd /> </div>
                  <div> <h4>05</h4> <span>New Admission</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div className='card rounded-0 dashboard_card'>
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className='card_icon'> <FaPersonCircleQuestion /> </div>
                  <div> <h4>02</h4> <span>Panding Admission</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard