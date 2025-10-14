// Mock v0-sdk implementation
export interface ChatDetail {
  id: string;
  url?: string;
  [key: string]: any;
}

export interface V0Client {
  user: {
    get(): Promise<any>;
  };
  projects: {
    find(): Promise<any>;
    getById(params: { projectId: string }): Promise<any>;
    create(params: any): Promise<any>;
  };
  chats: {
    create(params: any): Promise<any>;
    getById(params: { chatId: string }): Promise<any>;
    sendMessage(params: any): Promise<any>;
    update(params: any): Promise<any>;
    delete(params: { chatId: string }): Promise<any>;
    fork(params: any): Promise<any>;
  };
  deployments: {
    create(params: any): Promise<any>;
  };
  integrations: {
    vercel: {
      projects: {
        create(params: any): Promise<any>;
      };
    };
  };
}

export function createClient(config: { apiKey?: string }): V0Client {
  return {
    user: {
      async get() {
        return { id: 'mock-user', name: 'Mock User' };
      }
    },
    projects: {
      async find() {
        return { projects: [] };
      },
      async getById({ projectId }: { projectId: string }) {
        return { id: projectId, name: 'Mock Project' };
      },
      async create(params: any) {
        return { id: 'mock-project-id', ...params };
      }
    },
    chats: {
      async create(params: any) {
        return { id: 'mock-chat-id', ...params };
      },
      async getById({ chatId }: { chatId: string }) {
        return { id: chatId, url: 'https://v0.dev/mock-chat' };
      },
      async sendMessage(params: any) {
        return { id: 'mock-message-id', ...params };
      },
      async update(params: any) {
        return { id: params.chatId, ...params };
      },
      async delete({ chatId }: { chatId: string }) {
        return { success: true };
      },
      async fork(params: any) {
        return { id: 'mock-forked-chat-id', ...params };
      }
    },
    deployments: {
      async create(params: any) {
        return { id: 'mock-deployment-id', ...params };
      }
    },
    integrations: {
      vercel: {
        projects: {
          async create(params: any) {
            return { id: 'mock-vercel-project-id', ...params };
          }
        }
      }
    }
  };
}

// Default export for backward compatibility
export const v0 = createClient({});
