"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  Button,
  Divider,
  Link,
} from "@nextui-org/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl w-full py-12">
      {/* Section Header dengan padding tambahan */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Let's Talk
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We're here to answer your questions and explore opportunities.
        </p>
      </div>

      {/* Kontainer utama dengan padding dan height yang terkontrol */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Contact Form - dengan max-height */}
        <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 h-full max-h-[600px]">
          <CardHeader className="text-2xl font-medium px-6 pt-6 pb-0">
            Send a Message
          </CardHeader>
          <CardBody className="p-6 overflow-y-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="First name"
                  variant="underlined"
                  classNames={{
                    input: "text-white text-base",
                    label: "text-gray-400",
                  }}
                />
                <Input
                  type="text"
                  label="Last name"
                  variant="underlined"
                  classNames={{
                    input: "text-white text-base",
                    label: "text-gray-400",
                  }}
                />
              </div>
              <Input
                type="email"
                label="Email"
                variant="underlined"
                classNames={{
                  input: "text-white text-base",
                  label: "text-gray-400",
                }}
              />
              <Textarea
                label="Your message"
                variant="underlined"
                minRows={4}
                classNames={{
                  input: "text-white text-base",
                  label: "text-gray-400",
                }}
              />
              <Button
                color="primary"
                radius="full"
                className="w-full font-medium py-5 text-base mt-4"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* Contact Info - dengan max-height */}
        <div className="flex flex-col h-full max-h-[600px]">
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 h-full">
            <CardBody className="p-6 overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">EMAIL</h4>
                    <Link
                      href="mailto:contact@example.com"
                      className="text-white text-base"
                    >
                      contact@example.com
                    </Link>
                  </div>
                </div>

                <Divider className="bg-gray-800 my-4" />

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">PHONE</h4>
                    <Link
                      href="tel:+1234567890"
                      className="text-white text-base"
                    >
                      +1 (234) 567-8900
                    </Link>
                  </div>
                </div>

                <Divider className="bg-gray-800 my-4" />

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">ADDRESS</h4>
                    <p className="text-white text-base">
                      One Apple Park Way
                      <br />
                      Cupertino, CA 95014
                    </p>
                  </div>
                </div>

                <Divider className="bg-gray-800 my-4" />

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">HOURS</h4>
                    <p className="text-white text-base">
                      Mon-Fri: 8AM - 5PM
                      <br />
                      Sat-Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
