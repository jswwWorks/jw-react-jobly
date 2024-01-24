import { Link } from "react-router-dom"

/**Navigation stays on the top of the screen and contains links to
 *  homepage, JobList, and CompanyList
 *
 * props: none
 *
 * state: none
 *
 * renders:
 * App -> Navigation
 */

function Navigation() {
  return (<header>
    <Link to={"/"}>Jobly</Link>
    <Link to={"/companies"}>Companies</Link>
    <Link to={"/jobs"}>Jobs</Link>
  </header>)
}

export default Navigation;