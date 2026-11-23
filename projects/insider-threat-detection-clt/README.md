
# Web-Based Insider Threat Detection and Simulation System Using Context-Linked Temporal Rule-Based Analysis

**Final Year Project | University of Hertfordshire | March 2026**

**Project Category:** Cybersecurity, Insider Threat Detection, Security Monitoring and AI-Assisted Incident Analysis

## 1. Project Overview

This project focuses on the development of a web-based insider threat detection and simulation system using Context-Linked Temporal (CLT) rule-based analysis.

Insider threats are difficult to detect because individuals with legitimate access to organisational systems may perform suspicious activities that appear normal when examined individually.

The developed system addresses this problem by analysing user activities across different time periods and identifying suspicious behavioural patterns.

The system collects and processes security-related logs, applies predefined detection rules, generates security alerts and provides AI-assisted incident reports using Ollama.

The project was developed as part of my BSc (Hons) Computer Science (Cybersecurity and Networks) at the University of Hertfordshire.

## 2. Project Objectives

The main objectives of this project were:

1. Develop a logging mechanism to record authentication attempts, privilege changes and file access activities.
2. Implement a Context-Linked Temporal rule-based detection engine.
3. Identify suspicious behaviour by analysing related security events over time.
4. Generate security alerts when predefined detection conditions are satisfied.
5. Integrate an AI reporting module to provide incident analysis summaries.
6. Evaluate the system using controlled simulations and security testing environments.

## 3. Technologies and Tools

| Technology | Purpose |
|---|---|
| PHP | Backend development and detection logic |
| MySQL | Storage of system logs and security alerts |
| Apache / XAMPP | Local web application hosting |
| HTML, CSS and JavaScript | Web application interface |
| Kali Linux | Controlled security testing |
| Metasploitable | Vulnerable laboratory target |
| Ollama | Local AI model execution |
| Llama 3.1 | AI-assisted incident report generation |

## 4. System Architecture

The system consists of five main components.

**Web Application:** Provides interfaces for authentication, simulation, monitoring and incident review.

**Log Database:** Stores user activities, including login attempts, privilege changes, file access events and communication records.

**CLT Detection Engine:** Analyses related events using contextual information and predefined time windows.

**Alert Management:** Generates and stores security alerts when suspicious activity is detected.

**AI Reporting Module:** Uses Ollama to generate structured incident summaries based on detected alerts.

The overall process follows this sequence:

```text
User Activities / Security Events
               |
               v
       Log Collection
               |
               v
        MySQL Database
               |
               v
      CLT Detection Engine
               |
               v
       Security Alerts
               |
               v
       Monitoring Dashboard
               |
               v
     AI Incident Reporting
          (Ollama)
```

## 5. Context-Linked Temporal Detection

The core detection mechanism uses Context-Linked Temporal analysis.

Instead of evaluating every security event independently, the system examines relationships between activities occurring within specified time intervals.

For example, repeated login failures followed by successful authentication may indicate suspicious behaviour.

The detection mechanism considers four main elements:

- **Event Type:** The activity being recorded.
- **Condition:** The rule applied to the activity.
- **Time Window:** The period during which events are analysed.
- **Threshold:** The condition or frequency required to trigger an alert.

This approach allows related activities to be correlated before generating security alerts.

## 6. Detection Rules

Six detection rules were implemented.

| Rule | Detection Category | Description |
|---|---|---|
| R1 | HR-Risk Login Pattern | Detects repeated failed logins followed by successful authentication involving HR-risk users. |
| R2 | HR-Risk Privilege Escalation | Identifies privilege changes associated with HR-risk indicators. |
| R3 | Privileged Data Hoarding | Detects unusual access to sensitive information by newly privileged users. |
| R4 | Multi-Channel Data Exfiltration | Identifies sensitive file access combined with multiple external communication activities. |
| R5 | HR Multi-Anomaly Correlation | Detects multiple suspicious activities associated with HR-risk users. |
| R6 | Kali Environment Insider Attack Detection | Identifies suspicious login activity originating from the controlled Kali Linux testing environment. |

Each rule evaluates predefined conditions and produces alerts when the required criteria are satisfied.

## 7. Implementation Methodology

### Step 1 – Database Development

A MySQL database was created to store authentication records, privilege changes, file access information, communication activities and generated security alerts.

### Step 2 – Backend Implementation

PHP was used to implement the application backend, database communication and event logging functionality.

### Step 3 – CLT Rule Engine Development

A rule-based detection engine was implemented to evaluate security events based on contextual relationships and predefined time intervals.

### Step 4 – Alert Generation

The system was configured to generate alerts when suspicious behaviour satisfied the conditions of a detection rule.

Alerts include information such as the associated rule, severity, event details and timestamp.

### Step 5 – AI Integration

Ollama was integrated with the system to generate structured security incident reports.

These reports provide summaries of detected incidents, behavioural interpretations and potential security risks.

### Step 6 – System Testing

Controlled simulations and laboratory-generated security events were used to evaluate the system's detection functionality.

## 8. System Testing and Results

The system was evaluated using predefined test scenarios and a controlled virtual laboratory.

### Functional Testing

Each of the six detection rules was tested individually using appropriate log entries.

The functional tests confirmed that the rules generated their expected alerts under the tested conditions.

### Laboratory Security Testing

Kali Linux and Metasploitable were used in an isolated environment to generate authentication-related security events.

The resulting authentication logs were transmitted to the CLT system and analysed using the detection engine.

The system successfully generated the corresponding alert.

### Detection Results

Three selected security scenarios were evaluated during the system assessment.

All three were successfully detected, producing a **100% detection rate within this limited test set**.

This result demonstrates the system's functionality under the tested conditions. It does not establish the same performance in larger or more complex production environments.

### AI Reporting

The Ollama reporting module was evaluated using generated alerts.

The reports successfully summarised selected security events, including privilege escalation, multi-anomaly behaviour and external authentication activity.

## 9. Project Evidence

The original final-year project report contains supporting evidence of the system design, implementation and testing.

The documented evidence includes:

| Evidence | Original Report Reference |
|---|---|
| System Architecture | Figure 3.1 |
| CLT Detection Process | Figure 3.2 |
| Database Schema | Figure 3.3 |
| Rule Engine Execution Flow | Figure 4.4 |
| Alert Timeline | Figure 4.6 |
| Simulation Tools Interface | Figure 5.1 |
| CLT Detection Result | Figure 5.2 |
| Laboratory Security Validation | Figures 5.3–5.5 |
| AI-Generated Incident Reports | Figures 5.6–5.7 |
| Application Interface | Appendix A |
| Rule Engine Code | Appendix B |
| Context Generation Code | Appendix C |

The system was developed and tested within a controlled academic environment.

## 10. Challenges and Limitations

Several limitations were identified during development and evaluation.

**Rule-Based Detection:** The system relies on predefined detection rules. Previously unknown attack patterns may not be detected if they do not match existing conditions.

**Log Collection:** External system logs were transmitted through controlled communication rather than a fully automated collection mechanism.

**Scalability:** Testing was conducted within a limited environment. Performance under large-scale operational workloads was not extensively evaluated.

**AI Reporting:** The accuracy and usefulness of generated reports depend on the quality of the input information and prompt structure.

These limitations provide opportunities for future improvements.

## 11. Future Improvements

Potential improvements include:

1. Integrating machine learning techniques to identify previously unknown behavioural patterns.
2. Implementing automated log collection from multiple systems.
3. Improving scalability for larger organisational environments.
4. Integrating with established SIEM platforms.
5. Enhancing AI-generated incident analysis using improved models and structured prompts.
6. Expanding testing across additional scenarios and larger datasets.

## 12. Personal Reflection

Developing this project strengthened my understanding of cybersecurity monitoring and the importance of analysing security events in context.

One of the most valuable aspects was implementing the CLT detection engine because it required me to understand how different user activities could be connected to identify suspicious behaviour.

The project also helped me improve my PHP and MySQL development skills while gaining practical experience with security event logging, alert generation and AI-assisted reporting.

Through system testing, I learned that security tools must be evaluated carefully and that successful results in controlled environments do not necessarily represent performance in real organisational networks.

Overall, the project helped me connect software development knowledge with practical cybersecurity concepts.

---

**Project Author:** Puvan Ananthan  
**Institution:** University of Hertfordshire  
**Programme:** BSc (Hons) Computer Science (Cybersecurity and Networks)  
**Project Completion:** March 2026