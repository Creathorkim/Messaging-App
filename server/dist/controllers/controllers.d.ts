import type { Request, Response, NextFunction } from "express";
export declare const signUp: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const Login: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const GoogleInit: any;
export declare const GoogleLogin: (req: Request, res: Response, next: NextFunction) => void;
export declare const googleSignUpInit: any;
export declare const GoogleSignUp: (req: Request, res: Response, next: NextFunction) => void;
export declare const initialLogin: (req: Request, res: Response) => Promise<void>;
export declare const chatHistory: (req: Request, res: Response) => Promise<void>;
export declare const groupChatHistory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | {
    error: string;
}>;
export declare const searchBar: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const sendFriendRequest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const acceptFriendRequest: (req: Request, res: Response) => Promise<void>;
export declare const rejectFriendRequest: (req: Request, res: Response) => Promise<void>;
export declare const getFriendRequest: (req: Request, res: Response) => Promise<void>;
export declare const cancelRequest: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const contactUs: (req: Request, res: Response) => Promise<void>;
export declare const updateProfile: (req: Request, res: Response) => Promise<void>;
export declare const deleteAccount: (req: Request, res: Response) => Promise<void>;
export declare const fileUpload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createGroup: (req: Request, res: Response) => Promise<void>;
export declare const leaveGroup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const unFriend: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addMemberToGroup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=controllers.d.ts.map