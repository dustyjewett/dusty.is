import './software.engineer.css';

function SoftwareEngineer() {
  return (
    <div id="container" className="hresume">
      <div id="main" role="main">
        <div className="contact vcard">
          <h1 className="fn n" id="j"><span className="given-name">Dusty</span> <span
            className="family-name">Jewett</span><span className="visuallyhidden">'s Resume</span></h1>
          <div className="adr">
            <span className="locality">Seattle</span>, <span className="region">WA</span> <span
            className="postal-code">98115</span><span className="country-name">USA</span></div>
          <div> Email: <a className="email" href="mailto:dusty.jewett@gmail.com">dusty.jewett@gmail.com</a></div>
          <div className="hidden"> Web: <a className="url" href="http://dusty.is/">dusty.is</a> <br/>
            <a className="url" href="http://www.linkedin.com/in/dustyjewett">LinkedIn Profile</a></div>
          <div style={{ clear: "both" }}>&nbsp;</div>
        </div>
        <hr/>
        <div id="section_fte">
          <div className="sectionTitleDiv">
            <h2 title="Professional Experience">experience</h2>
          </div>
          <div className="vcalendar sectionContent">
            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Lead/Sr Software Engineer</span><br/>
                <span className="org">Patent Navigation</span><br/>
              </div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2015-04-20">April 2015</abbr> - <abbr
                className="dtend" title="current">current</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Mostly focused on leading UI teams create a web app that aimed to be IntelliJ for writing Patents.
                  <ul>
                    <li>Refactored and upgraded the patent editor, now based on CK Editor.</li>
                    <li>Created a set of components that allowed for super fast rendering of 1000s of items despite CK
                      Editor's intensive and setTimeout() laden initialization.
                    </li>
                    <li>Worked through the process of breaking a monolithic Ember app into smaller libraries.</li>
                    <li>Created a library that allows developers to run Ember logic in Node on the server.</li>
                  </ul>
                </p>
              </div>

            </div>

            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Lead/Sr Software Engineer</span><br/>
                <span className="org">Simply Measured</span><br/>
                <span className="title">Project: Siren</span><br/>
              </div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2013-02-18">Feb 2013</abbr> - <abbr
                className="dtend" title="2015-04-20">Apr 2015</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Inherited a JS project dedicated to creating 1:1 fidelity renderings of Excel Spreadsheet Charts in
                  the browser.
                  I fixed bugs, refactored to more modern buid chains (grunt), and created regression test software that
                  could visually diff the output.
                  Despite being the single most commonly used JS code in our site, it was able to shift into maintenance
                  mode, and would go 3-9 months without needing changes.
                </p>
              </div>

              <div className="htitle">
                <span className="title">Project: Diesel</span><br/>
              </div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Took over Rails team, hired 6 devs over 9 months. Architected a move to 'right-sized' micro-services,
                  enabling green-field development
                  without modifying the 4+ year old Rails site. Through an ever-present focus on bugs and stability, was
                  able to reduce
                  support requirements from 1-2 Sr devs per week to less than 1 Jr dev per week.
                </p>
              </div>
            </div>

            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Sr. Software Engineer</span><br/>
                <span className="org">Dendreon (via MaxSam Partners)</span>
              </div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2012-03-01">March 2012</abbr> - <abbr
                className="dtend" title="2012-12-31">Dec 2012</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Added features to the Client's legacy application, while minimizing the risk of regressions.
                </p>
                <p>
                  Built several prototypes in conjunction with UX and Product Team for pitching new/greenfield
                  development. Worked with client to find a technical solution that matched their desire to have a
                  single language powering their Frontend and Backend. Lead UI Development utilizing Vaadin, Java and
                  Groovy for two new projects. Implemented several patterns, including MVVM, which allowed a more
                  structured and contemporary paradigm than provided by Vaadin alone.
                </p>

              </div>
            </div>

            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">HTML/JS Developer - Contract</span><br/>
                <span className="org">Transact, Inc</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2011-11-01">November 2011</abbr> - <abbr
                className="dtend" title="2012-07-01">July 2012</abbr></span><br/>
                <span className="location">Shoreline, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Ported Flex 4 application previously developed into an HTML5/JS application, as users started
                  requesting the ability to use the product on their tablets. Utilized Backbone, jQuery and HighCharts
                  to create an application that was as functional on the small iPad screen as it was on the desktop.
                </p>
                <p>
                  Created a secondary app that shares views with the primary app, 'proving' that backbone can create
                  components that are reusable between apps.
                </p>
              </div>
            </div>


            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Sr. Software Engineer / Team Lead</span><br/>
                <span className="org">Real Networks</span>
              </div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2010-07-01">July 2010</abbr> - <abbr
                className="dtend" title="2012-03-01">March 2012</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Led team of 4 developers to create a full-featured WebApp for Real's Music/Photo/Video Cloud solution.
                  Coordinated with five other dev teams, along with Design and QA, to be the 'first adopter' of many new
                  features and designs.<br/>
                  Architected many of the systems that drove the UI, including a system that could query and cache
                  multiple levels of data, and a navigation system that could handle the complex UI paradigms the
                  designers dreamt up (though the most complex never shipped).<br/>
                  Developed many custom UI Components, including a complex and animated breadcrumb bar, TileLists that
                  could handle non-sequential loading of data, and screens that behaved differently based on the state
                  of many different variables (though I argued against the last one, on usability issues, and lost).
                </p>
                <p>
                  Developed a prototype application that replicated the Flash/Flex client/server communication in
                  HTML/JavaScript.<br/>
                </p>
                <p>
                  Currently working on an HTML/JS application that uses one codebase to power both a Web App and a
                  Chrome/Firefox/IE Extension. Created a custom module for Backbone that enables transparent JSONP
                  communication.
                </p>
              </div>
            </div>
            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Sr. Software Engineer / Team Lead</span><br/>
                <span className="org">The Active Network</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2008-10-01">October 2008</abbr> - <abbr
                className="dtend">June 2010</abbr></span><br/>
                <span className="location">Bothell, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">
                <p>
                  Designed and developed an enterprise-wide Flex UI-Component framework. Created a component structure
                  that allowed on-demand loading of modules and localization data, allowing the modules to be loosely
                  coupled to each other, but maintain strongly-typed data interfaces.
                </p>
                <p>
                  Led team that owns every component that touches any financial transaction throughout all new markets.
                  Focused on the creation of UI components that were customizable to the specific usage, but were able
                  to maintain the business logic that was required for company-wide auditing requirements. I often had
                  to find compromises between the business/legal requirements and the requests of an individual
                  department.
                </p>
              </div>
            </div>

            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Flex Developer - Contract</span><br/>
                <span className="org">Transact, Inc</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2010-03-01">March 2010</abbr> - <abbr
                className="dtend" title="2010-08-01">August 2010</abbr></span><br/>
                <span className="location">Shoreline, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">Developed a Flex application using to collect and calculate performance
                indicators for school districts, providing them with the necessary data to increase efficiency. Utilized
                the Swiz framework, along with the then-beta version of Flex 4 to create a dynamic application which has
                greatly improved customer interaction and usage.
              </div>
            </div>


            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Sr. Multimedia Developer</span><br/>
                <span className="org">Panasonic Avionics</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2005-12-01">December 2005</abbr> - <abbr
                className="dtend" title="2008-10-01">October 2008</abbr></span><br/>
                <span className="location">Bothell, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">Created applications and content templates that allowed our developers to
                maintain high quality and high efficiency.<br/>
                Developed interactive diagrams and software simulators for web-based and classroom instruction.
              </div>
            </div>

            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Flex Developer - Contract</span><br/>
                <span className="org">Redclay / Gates Foundation</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2007-10-01">October 2007</abbr> - <abbr
                className="dtend" title="2008-03-01">March 2008</abbr></span><br/>
                <span className="location">Kirkland, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">Worked on an application that allows teachers and school
                administrators to access and explore district-wide data.
                Optimized visualizations to decrease memory usage by 25% and improve performance by up to 50%.
              </div>
            </div>


          </div>
        </div>
        <hr/>
        <div id="section_indy">
          <div className="sectionTitleDiv">
            <h2 title="Independant Experience">projects</h2>
          </div>
          <div className="vcalendar sectionContent">
            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Founder / Developer </span><br/>
                <span className="org">Identifi (<a href="http://identifi.mobi">identifi.mobi</a>)</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2010-10-01">October 2010</abbr> - <abbr
                className="dtend">Present</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">Created the Identifi.mobi Android application as a way of learning new
                technology. Fully developed three separate versions, one fully AIR application, one Hybrid AIR/Android
                version, and just recently migrated to an AIR/ANE implementation. With the AIR/ANE nearly finalized, I
                expect to start development on the iOS version soon.
              </div>
            </div>
            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Manager</span><br/>
                <span className="org">Meetup Group: Seattle Web App Developers / SeaFlex (<a
                  href="http://www.meetup.com/Seattle-Web-App-Developers-Group/">Seattle Web App Devs</a>)</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2007-10-01">October 2007</abbr> - <abbr
                className="dtend" title="2012-10-01">October 2012</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">Managed Meetup / User Group for developers in the Seattle Area. From
                2007-2011, group was focused on Flex development. In 2011, we expanded to include HTML/JS development,
                changing our name to Seattle Web App Developers in the process. We meet once a month, and I often give
                short intro-to-X talks, prior to a main speaker. Usually once or twice a year, I give a longer 2-hour
                presentation. I also speak at other meetups, having spoken at the ColdFusion and Android user groups. I
                stepped down in 2012 after managing the group for 5 years, and now serve as a mentor for the new
                managers.
              </div>
            </div>
            <div className="experience vevent vcard">
              <div className="htitle">
                <span className="title">Contributor</span><br/>
                <span className="org">Adobe Flex SDK (<a
                  href="http://incubator.apache.org/flex/"> Apache Flex</a>)</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2009-10-01">July 2009</abbr> - <abbr
                className="dtend">Present</abbr></span><br/>
                <span className="location">Seattle, WA</span></div>
              <div className="clearfix">&nbsp;</div>
              <div className="description">I have contributed three bugfixes to Adobe Flex. I expect to be able to
                continue my contributions after the migration to Apache Flex has stabilized. I was an initial member of
                the Spoon Project, which helped Adobe transition Flex to Apache.
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div id="section_education">
          <div className="sectionTitleDiv">
            <h2>education</h2>
          </div>
          <div className="vcalendar sectionContent">
            <div className="education vevent vcard">
              <div className="htitle">
                <span className="summary"> BA Computer Science</span><br/>
                <span className="org">University of South Dakota</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="1999-08-01">August 1999</abbr> - <abbr
                className="dtend" title="2003-05-01">May 2003</abbr></span><br/>
                <span className="location">Vermillion, SD</span></div>
              <div className="clearfix">&nbsp;</div>
            </div>
            <div className="education vevent vcard">
              <div className="htitle">
                <span className="summary"> MS Technology in Education and Training</span><br/>
                <span className="org">University of South Dakota</span></div>
              <div className="floatingExtraData"><span className="date_duration"><abbr className="dtstart"
                                                                                       title="2003-08-01">August 2003</abbr> - <abbr
                className="dtend" title="2005-05-01">May 2005</abbr></span><br/>
                <span className="location">Vermillion, SD</span></div>
              <div className="clearfix">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SoftwareEngineer;
