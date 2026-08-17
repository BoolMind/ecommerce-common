import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class GrpcExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: unknown, _host: ArgumentsHost): Observable<never>;
    private resolveStatus;
}
