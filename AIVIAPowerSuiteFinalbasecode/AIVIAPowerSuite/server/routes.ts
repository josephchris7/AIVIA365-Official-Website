import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const data = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(data);
      
      return res.status(201).json({
        message: "Contact request submitted successfully",
        id: contactRequest.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid request data",
          errors: error.format()
        });
      }
      
      console.error("Error submitting contact request:", error);
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  app.get('/api/contact', async (req, res) => {
    try {
      const contactRequests = await storage.getAllContactRequests();
      return res.status(200).json(contactRequests);
    } catch (error) {
      console.error("Error retrieving contact requests:", error);
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
