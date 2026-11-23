# Virtual Cybersecurity Lab Design and Network Configuration

**Course:** WQE7001 – Cyber Security  
**Institution:** University of Malaya  
**Project Category:** Network Security, Virtualisation and Network Reconnaissance

## 1. Project Overview

This project involved configuring an isolated virtual cybersecurity laboratory using Kali Linux and Metasploitable 2 in VirtualBox.

The main purpose was to establish a controlled environment for practical cybersecurity exercises, including network configuration, connectivity verification and service discovery.

The laboratory allowed me to apply networking concepts in a practical environment while gaining experience with Linux networking commands and Nmap.

Both virtual machines were configured to communicate through a VirtualBox host-only network.

## 2. Project Objectives

The objectives of this project were:

1. Configure Kali Linux and Metasploitable 2 as virtual machines.
2. Establish a host-only virtual network for controlled laboratory testing.
3. Identify and verify the IP addresses of both virtual machines.
4. Test network connectivity between the machines.
5. Perform service discovery using Nmap.
6. Document the laboratory configuration and technical findings.

## 3. Tools and Technologies

| Tool | Purpose |
|---|---|
| Oracle VirtualBox | Virtual machine management |
| Kali Linux | Security testing workstation |
| Metasploitable 2 | Intentionally vulnerable laboratory target |
| Linux networking utilities | IP address and connectivity verification |
| Nmap | Network service and version discovery |
| Host-only Adapter | Virtual network communication |

## 4. Laboratory Network Configuration

The laboratory consisted of two virtual machines connected using VirtualBox host-only networking.

### Network Details

| Configuration | Kali Linux | Metasploitable 2 |
|---|---|---|
| Network interface | eth0 | eth0 |
| IPv4 address | 192.168.56.102 | 192.168.56.103 |
| Subnet mask | 255.255.255.0 | 255.255.255.0 |
| Network | 192.168.56.0/24 | 192.168.56.0/24 |
| Adapter type | Host-only Adapter | Host-only Adapter |

The host-only adapter allowed the virtual machines to communicate within the designated laboratory network.

This configuration was selected to keep the intentionally vulnerable Metasploitable environment separated from the external physical network.

### Network Diagram

The laboratory network consisted of the following components:

```text
                VirtualBox Host-Only Network
                      192.168.56.0/24

       +----------------+       +-------------------+
       |                |       |                   |
       |   Kali Linux   |       |  Metasploitable 2 |
       |                |       |                   |
       | 192.168.56.102 |       |  192.168.56.103   |
       |                |       |                   |
       +--------+-------+       +---------+---------+
                |                         |
                +-----------+-------------+
                            |
                    Host-Only Adapter
```

The original network diagram is stored in the project's evidence folder.

## 5. Implementation Methodology

### Step 1 – Virtual Machine Configuration

I configured Kali Linux and Metasploitable 2 using Oracle VirtualBox.

Both virtual machines were configured with a host-only network adapter.

The VirtualBox settings were checked to verify that the machines used the intended host-only network.

**Evidence:** `kali-network-config.png` and `metasploitable-network-config.png`

### Step 2 – IP Address Verification

After configuring the virtual machines, I verified their IP addresses using Linux networking commands.

On Kali Linux, I used:

```bash
ip -br addr
```

The output showed that the `eth0` interface was active and assigned the following address:

```text
eth0    UP    192.168.56.102/24
```

On Metasploitable 2, I used:

```bash
ifconfig
```

The output showed:

```text
Interface: eth0
IP Address: 192.168.56.103
Subnet Mask: 255.255.255.0
```

Both machines were assigned addresses within the same subnet.

**Evidence:** `kali-ip-address.png` and `metasploitable-ip-address.png`

### Step 3 – Connectivity Testing

After confirming the IP addresses, I tested connectivity from Kali Linux to Metasploitable 2.

The following command was used:

```bash
ping -c 4 192.168.56.103
```

The results were:

| Measurement | Result |
|---|---|
| Target IP | 192.168.56.103 |
| Packets transmitted | 4 |
| Packets received | 4 |
| Packet loss | 0% |
| Minimum RTT | 0.507 ms |
| Average RTT | 1.147 ms |
| Maximum RTT | 2.919 ms |

All four ICMP packets received responses.

This confirmed that Kali Linux could communicate with Metasploitable 2 through the configured virtual network.

**Evidence:** `connectivity-test.png`

### Step 4 – Network Service Discovery

After verifying connectivity, I used Nmap to identify services running on the Metasploitable 2 virtual machine.

The scan was performed within the authorised laboratory environment.

The following command was used:

```bash
nmap -sV 192.168.56.103
```

The `-sV` option enables service and version detection.

The scan confirmed that the target was active and identified multiple open TCP ports.

### Selected Nmap Findings

| Port | Service | Detected Software |
|---|---|---|
| 21/tcp | FTP | vsftpd 2.3.4 |
| 22/tcp | SSH | OpenSSH 4.7p1 |
| 23/tcp | Telnet | Linux telnetd |
| 25/tcp | SMTP | Postfix smtpd |
| 53/tcp | DNS | ISC BIND 9.4.2 |
| 80/tcp | HTTP | Apache httpd 2.2.8 |
| 139/tcp | NetBIOS | Samba smbd |
| 445/tcp | SMB | Samba smbd |
| 3306/tcp | MySQL | MySQL 5.0.51a |
| 5432/tcp | PostgreSQL | PostgreSQL 8.3.0–8.3.7 |
| 5900/tcp | VNC | VNC protocol 3.3 |
| 6667/tcp | IRC | UnrealIRCd |

The scan also identified additional services, including remote login services and Java RMI.

These results demonstrated how Nmap can be used to identify network services and collect information about exposed software.

**Evidence:** `nmap-service-scan.png`

## 6. Results and Security Observations

The laboratory configuration and testing activities produced the following results.

### Network Configuration

Both virtual machines were configured with host-only network adapters and assigned IP addresses within the `192.168.56.0/24` subnet.

### Connectivity

The ICMP connectivity test was successful, with four packets received and no packet loss.

### Service Discovery

Nmap identified multiple open TCP ports and associated services on Metasploitable 2.

The scan demonstrated that an active network service can expose information about the software running on a system.

Services such as Telnet and FTP also highlighted the importance of reviewing network access controls and communication security.

However, identifying an open port does not automatically confirm a vulnerability. Further authorised assessment would be required to determine whether a service was insecure or exploitable.

Overall, the results demonstrated that the virtual laboratory was suitable for basic network reconnaissance and service identification exercises.

## 7. Project Evidence

Seven screenshots were collected to support the project findings.

| No. | Evidence File | Description |
|---|---|---|
| 1 | `kali-ip-address.png` | Kali Linux IP configuration |
| 2 | `kali-network-config.png` | Kali Linux VirtualBox network settings |
| 3 | `connectivity-test.png` | Successful ICMP connectivity test |
| 4 | `nmap-service-scan.png` | Nmap service discovery results |
| 5 | `metasploitable-ip-address.png` | Metasploitable IP configuration |
| 6 | `metasploitable-network-config.png` | Metasploitable VirtualBox network settings |
| 7 | `lab-network-diagram.png` | Laboratory network topology |

All supporting screenshots are stored in the `evidence/` directory.

## 8. Challenges and Troubleshooting

One important lesson from this project was that network configuration must be verified before performing security testing.

Incorrect virtual network adapter settings or IP address configurations can prevent communication between virtual machines.

To verify the laboratory environment, I examined the VirtualBox network settings, checked the IP addresses and performed an ICMP connectivity test.

The successful ping results confirmed that communication was working before I proceeded with service discovery.

This process demonstrated the importance of troubleshooting systematically rather than immediately assuming a security tool is not functioning correctly.

## 9. Project Limitations

The laboratory was designed for educational purposes and has several limitations.

First, it contained only two virtual machines, so it did not represent the complexity of a real organisational network.

Second, the intentionally vulnerable Metasploitable system was used for controlled testing rather than representing a production system.

Third, the activity focused on basic network connectivity and service discovery. It did not include comprehensive vulnerability validation or security monitoring.

These limitations should be considered when interpreting the results.

## 10. Future Improvements

Several improvements could be introduced to expand the laboratory.

1. Add Wireshark to capture and analyse network traffic.
2. Introduce additional virtual machines to simulate a more complex network.
3. Implement a dedicated security monitoring system.
4. Develop repeatable network assessment procedures.
5. Include additional authorised vulnerability assessment exercises.
6. Maintain more detailed technical logs and testing documentation.

## 11. Personal Reflection

This project helped me understand the relationship between virtualisation, networking and cybersecurity testing.

Configuring Kali Linux and Metasploitable 2 gave me practical experience with virtual network adapters, IP addressing and connectivity testing.

I learned that even basic network configuration problems can affect the outcome of security exercises.

The Nmap activity was particularly useful because it allowed me to observe how different services are exposed through network ports.

It also reinforced the importance of interpreting scanning results carefully rather than assuming that every detected service represents a confirmed vulnerability.

Overall, this project strengthened my practical understanding of network security fundamentals and provided a foundation for more advanced cybersecurity laboratory activities.

---

**Project Author:** Puvan Ananthan  
**Programme:** MSc Cybersecurity  
**Institution:** University of Malaya  
**Project Type:** Academic Cybersecurity Laboratory